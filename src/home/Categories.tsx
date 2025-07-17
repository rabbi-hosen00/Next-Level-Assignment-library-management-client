// import { BookOpen } from "lucide-react";

// const categories = ["Fiction", "Science", "History", "Technology"];

// const Categories = () => {
//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="max-w-6xl mx-auto text-center px-4">
//         {/* Heading */}
//         <div className="flex justify-center items-center gap-2 mb-3">
//           <BookOpen className="text-indigo-600 w-8 h-8" />
//           <h2 className="text-3xl font-extrabold text-indigo-700">
//             Explore Categories
//           </h2>
//         </div>
//         <p className="text-gray-600 mb-10">
//           Dive into genres that spark your curiosity.
//         </p>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//           {categories.map((category) => (
//             <div
//               key={category}
//               className="bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-semibold py-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
//             >
//               {category}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;




const categories = ["Fiction", "Science", "History", "Technology"];

const Categories = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-indigo-800 mb-4">
          📚 Explore Categories
        </h2>
        <p className="text-gray-600 mb-8">
          Find the perfect genre to match your curiosity.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-gradient-to-r from-blue-300 via-indigo-400 to-orange-200 text-white
                text-lg font-bold py-8 rounded-xl shadow-lg hover:scale-105 transform transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;





// const categories = [
//   { name: "Fiction", icon: "📖" },
//   { name: "Science", icon: "🔬" },
//   { name: "History", icon: "🏛" },
//   { name: "Technology", icon: "💻" },
// ];

// const Categories = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-6">
//           Explore Categories
//         </h2>
//         <p className="text-gray-600 mb-10">
//           Choose your favorite genre and start reading today.
//         </p>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//           {categories.map((cat) => (
//             <div
//               key={cat.name}
//               className="backdrop-blur-md bg-white/30 shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/50 transition"
//             >
//               <span className="text-4xl mb-3">{cat.icon}</span>
//               <h3 className="text-lg font-semibold">{cat.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;
