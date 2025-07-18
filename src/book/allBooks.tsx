


// import React from "react";
// import { useGetAllBooksQuery, useDeleteBookMutation } from "@/redux/api/bookApi";
// import { Link } from "react-router-dom";
// import { Pencil, Trash, BookOpen } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { toast } from "sonner";
// import SearchBar from "./SearchBar";
// import { useAppSelector } from "@/redux/hooks";

// // ✅ Book Type (from API)
// export interface Book {
//   _id?: string;
//   title: string;
//   author: string;
//   genre: string;
//   isbn: string;
//   description: string;
//   copies: number;
//   available?: boolean;
// }

// const BookList: React.FC = () => {
//   const { data, isLoading, isError } = useGetAllBooksQuery();
//   const [deleteBook] = useDeleteBookMutation();



//   const books = data?.data || [];

//   const searchTerm = useAppSelector((state) =>
//     state.book.searchTerm.toLowerCase()
//   );
//   // const books = data?.data || [];

//   const filteredBooks = books.filter((book) =>
//     `${book.title} ${book.author} ${book.genre}`.toLowerCase().includes(searchTerm)
//   );


//   // ✅ Delete handler with confirmation
//   const handleDelete = (id: string) => {
//     toast("Are you sure you want to delete this book?", {
//       action: {
//         label: "Yes, Delete",
//         onClick: async () => {
//           try {
//             await deleteBook(id).unwrap();
//             toast.success("✅ Book deleted successfully!");
//           } catch {
//             toast.error("❌ Failed to delete the book.");
//           }
//         },
//       },
//       cancel: {
//         label: "Cancel",
//         onClick: () => toast.info("❎ Deletion cancelled."),
//       },
//     });
//   };

//   // ✅ Loading state
//   if (isLoading) {
//     return (
//       <div className="space-y-4 mt-6">
//         {[...Array(5)].map((_, i) => (
//           <Skeleton key={i} className="w-full h-16 rounded" />
//         ))}
//       </div>
//     );
//   }

//   // ✅ Error state
//   if (isError) {
//     return (
//       <p className="text-center text-red-500 mt-10 text-lg font-semibold">
//         ⚠️ Failed to load books. Please try again later.
//       </p>
//     );
//   }



//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-4">
//       <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
//         📚 All Books
//       </h2>
   
//       <SearchBar></SearchBar>

//       {/* ✅ Desktop Table View */}
//       <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
//         <table className="w-full table-auto border-collapse border border-gray-200">
//           <thead className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
//             <tr>
//               <th className="p-3 text-left">Title</th>
//               <th className="p-3 text-left">Author</th>
//               <th className="p-3 text-left">Genre</th>
//               <th className="p-3 text-left">ISBN</th>
//               <th className="p-3 text-center">Copies</th>
//               <th className="p-3 text-center">Status</th>
//               <th className="p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {books.map((book: Book, index: number) => {
//               const isAvailable = book.copies > 0 
//               return (
//                 <tr
//                   key={book._id ?? index}
//                   className="border-b hover:bg-gray-100 transition"
//                 >
//                   <td className="p-3">{book.title}</td>
//                   <td className="p-3">{book.author}</td>
//                   <td className="p-3">{book.genre}</td>
//                   <td className="p-3">{book.isbn}</td>
//                   <td className="p-3 text-center">{book.copies}</td>
//                   <td className="p-3 text-center">
//                     <span
//                       className={`px-3 py-1 text-sm font-semibold rounded-full ${
//                         isAvailable
//                           ? "bg-green-100 text-green-600"
//                           : "bg-red-100 text-red-600"
//                       }`}
//                     >
//                       {isAvailable ? "Available" : "Unavailable"}
//                     </span>
//                   </td>
//                   <td className="p-3 flex justify-center gap-2">
//                     <Link to={`/edit-book/${book._id}`}>
//                       <Button
//                         variant="outline"
//                         className="flex items-center gap-2 text-indigo-600"
//                       >
//                         <Pencil size={16} /> Edit
//                       </Button>
//                     </Link>
//                     <Link to={`/borrow/${book._id}`}>
//                       <Button
//                         variant="default"
//                         disabled={!isAvailable}
//                         className={`flex items-center gap-2 ${
//                           isAvailable
//                             ? "bg-green-600 hover:bg-green-700"
//                             : "bg-gray-400"
//                         }`}
//                       >
//                         <BookOpen size={16} /> Borrow
//                       </Button>
//                     </Link>
//                     <Button
//                       variant="destructive"
//                       className="flex items-center gap-2"
//                       onClick={() => handleDelete(book._id!)}
//                     >
//                       <Trash size={16} /> Delete
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* ✅ Mobile Card View */}
//       <div className="block md:hidden space-y-4">
//         {books.map((book: Book, index: number) => {
//           const isAvailable = book.copies > 0 && (book.available ?? false);
//           return (
//             <div
//               key={book._id ?? index}
//               className="bg-white shadow-md rounded-lg p-4 border"
//             >
//               <h3 className="text-xl font-bold text-indigo-700">
//                 {book.title}
//               </h3>
//               <p className="text-gray-600">
//                 <strong>Author:</strong> {book.author}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Genre:</strong> {book.genre}
//               </p>
//               <p className="text-gray-600">
//                 <strong>ISBN:</strong> {book.isbn}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Copies:</strong> {book.copies}
//               </p>
//               <p className="text-gray-600 mb-4">
//                 <strong>Status:</strong>{" "}
//                 <span
//                   className={`font-semibold ${
//                     isAvailable ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {isAvailable ? "Available" : "Unavailable"}
//                 </span>
//               </p>

//               <div className="flex flex-col gap-2">
//                 <Link to={`/edit-book/${book._id}`}>
//                   <Button variant="outline" className="w-full">
//                     <Pencil size={16} /> Edit
//                   </Button>
//                 </Link>
//                 <Link to={`/borrow/${book._id}`}>
//                   <Button
//                     variant="default"
//                     disabled={!isAvailable}
//                     className={`w-full ${
//                       isAvailable
//                         ? "bg-green-600 hover:bg-green-700"
//                         : "bg-gray-400"
//                     }`}
//                   >
//                     <BookOpen size={16} /> Borrow
//                   </Button>
//                 </Link>
//                 <Button
//                   variant="destructive"
//                   className="w-full"
//                   onClick={() => handleDelete(book._id!)}
//                 >
//                   <Trash size={16} /> Delete
//                 </Button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BookList;



import React from "react";
import { useGetAllBooksQuery, useDeleteBookMutation } from "@/redux/api/bookApi";
import { Link } from "react-router-dom";
import { Pencil, Trash, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import SearchBar from "./SearchBar";
import { useAppSelector } from "@/redux/hooks";

// ✅ Book Type (from API)
export interface Book {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
}

const BookList: React.FC = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  // ✅ Get books from API
  const books = data?.data || [];

  // ✅ Get search term from Redux and normalize it
  const searchTerm = useAppSelector((state) =>
    state.book.searchTerm.toLowerCase().trim()
  );

  // ✅ Filter books by title, author, or genre safely
  const filteredBooks = books.filter((book) => {
    const title = book.title?.toLowerCase() || "";
    const author = book.author?.toLowerCase() || "";
    const genre = book.genre?.toLowerCase() || "";

    return (
      title.includes(searchTerm) ||
      author.includes(searchTerm) ||
      genre.includes(searchTerm)
    );
  });

  // ✅ Delete handler with confirmation
  const handleDelete = (id: string) => {
    toast("Are you sure you want to delete this book?", {
      action: {
        label: "Yes, Delete",
        onClick: async () => {
          try {
            await deleteBook(id).unwrap();
            toast.success("✅ Book deleted successfully!");
          } catch {
            toast.error("❌ Failed to delete the book.");
          }
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => toast.info("❎ Deletion cancelled."),
      },
    });
  };

  // ✅ Loading state
  if (isLoading) {
    return (
      <div className="space-y-4 mt-6">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-full h-16 rounded" />
        ))}
      </div>
    );
  }

  // ✅ Error state
  if (isError) {
    return (
      <p className="text-center text-red-500 mt-10 text-lg font-semibold">
        ⚠️ Failed to load books. Please try again later.
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mb-10 mt-10 p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
        📚 All Books
      </h2>

      {/* Search Bar */}
      <SearchBar />

      {/* No books found message */}
      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500 mt-6 text-lg">
          ❌ No books found.
        </p>
      )}

      {/* Desktop Table View */}
      {filteredBooks.length > 0 && (
        <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Author</th>
                <th className="p-3 text-left">Genre</th>
                <th className="p-3 text-left">ISBN</th>
                <th className="p-3 text-center">Copies</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book: Book, index: number) => {
                const isAvailable = book.copies > 0;
                return (
                  <tr
                    key={book._id ?? index}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="p-3">{book.title}</td>
                    <td className="p-3">{book.author}</td>
                    <td className="p-3">{book.genre}</td>
                    <td className="p-3">{book.isbn}</td>
                    <td className="p-3 text-center">{book.copies}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          isAvailable
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {isAvailable ? "Available" : "Unavailable"}
                      </span>
                    </td>
                    <td className="p-3 flex justify-center gap-2">
                      <Link to={`/edit-book/${book._id}`}>
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 text-indigo-600"
                        >
                          <Pencil size={16} /> Edit
                        </Button>
                      </Link>
                      <Link to={`/borrow/${book._id}`}>
                        <Button
                          variant="default"
                          disabled={!isAvailable}
                          className={`flex items-center gap-2 ${
                            isAvailable
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-gray-400"
                          }`}
                        >
                          <BookOpen size={16} /> Borrow
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        className="flex items-center gap-2"
                        onClick={() => handleDelete(book._id!)}
                      >
                        <Trash size={16} /> Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {filteredBooks.map((book: Book, index: number) => {
          const isAvailable = book.copies > 0;
          return (
            <div
              key={book._id ?? index}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <h3 className="text-xl font-bold text-indigo-700">
                {book.title}
              </h3>
              <p className="text-gray-600">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="text-gray-600">
                <strong>Genre:</strong> {book.genre}
              </p>
              <p className="text-gray-600">
                <strong>ISBN:</strong> {book.isbn}
              </p>
              <p className="text-gray-600">
                <strong>Copies:</strong> {book.copies}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    isAvailable ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isAvailable ? "Available" : "Unavailable"}
                </span>
              </p>

              <div className="flex flex-col gap-2">
                <Link to={`/edit-book/${book._id}`}>
                  <Button variant="outline" className="w-full">
                    <Pencil size={16} /> Edit
                  </Button>
                </Link>
                <Link to={`/borrow/${book._id}`}>
                  <Button
                    variant="default"
                    disabled={!isAvailable}
                    className={`w-full ${
                      isAvailable
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-400"
                    }`}
                  >
                    <BookOpen size={16} /> Borrow
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => handleDelete(book._id!)}
                >
                  <Trash size={16} /> Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
