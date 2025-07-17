
import { useAddBookMutation } from "@/redux/api/bookApi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Genre = "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";

interface BookFormData {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description: string;
  copies: number;
}

const AddBook: React.FC = () => {
  const[addbook]=useAddBookMutation()

  const navigate = useNavigate();

  const genres: Genre[] = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  const [formData, setFormData] = useState<BookFormData>({
    title: "",
    author: "",
    genre: "FICTION", // ✅ default as string
    isbn: "",
    description: "",
    copies: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "copies" ? Number(value) : value,
    });
  };





  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Book Added:", formData);

    try {
      await addbook(formData).unwrap();
      toast.success("📚 Book added successfully!")
       navigate("/books");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("❌ Failed to add book. Please try again.")
    }

  
   
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 mb-12 bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Image */}
        <div className="hidden md:block">
          <img
            src="https://watermark.lovepik.com/photo/20211121/large/lovepik-the-female-students-in-the-school-library-review-picture_500538557.jpg"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-6">
            Add a New Book
          </h2>
          <p className="text-gray-500 mb-6">
            Fill in the details below to add a new book to the library.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter book title"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author's name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Genre & ISBN */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Genre</label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  {genres.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">ISBN</label>
                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  placeholder="Enter ISBN number"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a brief description of the book"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                rows={3}
              ></textarea>
            </div>

            {/* Copies */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Copies</label>
              <input
                type="number"
                name="copies"
                value={formData.copies}
                onChange={handleChange}
                min={1}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
