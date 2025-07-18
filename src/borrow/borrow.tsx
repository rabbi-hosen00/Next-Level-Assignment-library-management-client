
import { Skeleton } from "@/components/ui/skeleton";
import { useBorrowBookMutation, useGetBookByIdQuery } from "@/redux/api/bookApi";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";


const Borrow = () => {
  const { book } = useParams<{ book: string | undefined }>(); // book = bookId
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetBookByIdQuery(book!);
  const [borrowBook] = useBorrowBookMutation();

  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const singleBook = data?.data; // API Response -> data: Book

  if (isLoading) {
    return (
      <div className="space-y-4 mt-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="w-full h-14 rounded" />
        ))}
      </div>
    );
  }

  if (!book) {
    toast.error("Invalid Book ID");
    return;
  }

  if (isError || !singleBook) {
    return <p className="text-center text-red-600 mt-10">Failed to load book info.</p>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (quantity < 1 || quantity > singleBook.copies) {
      toast.error(`Quantity must be between 1 and ${singleBook.copies}`);
      return;
    }

    if (!dueDate) {
      toast.error("Please select a due date");
      return;
    }

    const selectedDate = new Date(dueDate);
    const today = new Date();
    if (selectedDate < today) {
      toast.error("Due date cannot be in the past");
      return;
    }

    try {
      await borrowBook({
        book: book, // ✅ শুধুমাত্র bookId
        quantity,
        dueDate,
      }).unwrap();
      toast.success("✅ Book borrowed successfully!");
      navigate("/borrow-summary"); // ✅ পরে এই পেজ তৈরি করো
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : "Failed to borrow the book.";
      toast.error(errMsg);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Borrow Book</h2>
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold">{singleBook.title}</h3>
        <p className="text-gray-600">Author: {singleBook.author}</p>
        <p className="text-gray-600">Available Copies: {singleBook.copies}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="number"
            min={1}
            max={singleBook.copies}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]} // ✅ No past date
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
        >
          Borrow Now
        </button>
      </form>
    </div>
  );
};

export default Borrow;
