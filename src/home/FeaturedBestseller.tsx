// import React from "react";

// const FeaturedBestseller: React.FC = () => {
//   const featuredBook = {
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL600_SR600,600_.jpg",
//     title: "Pride and Privilege and Zombies",
//     author: "Steven Gerrard",
//     description:
//       "This delightful book is the latest in the series of Ladybird books which have been specially planned to help grown-ups with the world about them...",
//     price: "$14.99",
//   };

//   const whatsNew = [
//     {
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L._AC_UL600_SR600,600_.jpg",
//       title: "Let the Sun Shine",
//       price: "$24.00",
//       rating: 5,
//     },
//     {
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL600_SR600,600_.jpg",
//       title: "A Doctor in the House",
//       price: "$6.50 – $16.99",
//       rating: 5,
//     },
//     {
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL600_SR600,600_.jpg",
//       title: "A Banquet of Mouse",
//       price: "$12.00 – $18.00",
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="py-12 max-w-6xl mx-auto  border-2 border-amber-100 text-center px-4 md:px-10 bg-white">
//       <div className="grid grid-cols-1 text-center md:grid-cols-3  gap-10">
//         {/* Left Side - Featured Book */}
//         <div className="md:col-span-2 flex flex-col md:flex-row items-center md:items-start gap-8">
//           <img
//             src={featuredBook.image}
//             alt={featuredBook.title}
//             className="w-64 h-80 object-cover rounded-lg shadow-md"
//           />
//           <div>
//             <h2 className="text-2xl font-bold mb-4">{featuredBook.title}</h2>
//             <p className="text-gray-700 mb-2">
//               <span className="font-semibold text-red-500">Author:</span>{" "}
//               {featuredBook.author}
//             </p>
//             <p className="text-gray-600 mb-4">{featuredBook.description}</p>
//             <p className="text-lg font-semibold mb-4">
//               Price:{" "}
//               <span className="text-red-500">{featuredBook.price}</span>
//             </p>
//             <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
//               SHOP ONLINE
//             </button>
//           </div>
//         </div>

//         {/* Right Side - What's New */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">WHAT'S NEW</h3>
//           <div className="space-y-6">
//             {whatsNew.map((book, index) => (
//               <div key={index} className="flex gap-4 items-start">
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-16 h-20 object-cover rounded"
//                 />
//                 <div>
//                   <h4 className="font-semibold">{book.title}</h4>
//                   <div className="text-yellow-500">
//                     {"★".repeat(book.rating)}{" "}
//                     {"☆".repeat(5 - book.rating)}
//                   </div>
//                   <p className="text-red-500">{book.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4">
//             <a
//               href="#"
//               className="text-red-500 font-semibold hover:underline flex items-center gap-2"
//             >
//               View More →
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedBestseller;




import React from "react";
import { Link } from "react-router";

const FeaturedBestseller: React.FC = () => {
    const featuredBook = {
        image:
            "https://watermark.lovepik.com/photo/20211121/large/lovepik-a-spacious-and-bright-library-reading-room-picture_500583449.jpg",
        title: "Pride and Privilege and Zombies",
        author: "Steven Gerrard",
        description:
            "This delightful book.latest  specially   of Ladybird books which have been specially planned to help grown-ups with the world about them is the latest in the series of Ladybird books which have been specially planned to help grown-ups with the world about them...",
        price: "$14.99",
    };

    const whatsNew = [
        {
            image:
                "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L._AC_UL600_SR600,600_.jpg",
            title: "Let the Sun Shine",
            price: "$24.00",
            rating: 5,
        },
        {
            image:
                "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL600_SR600,600_.jpg",
            title: "A Doctor in the House",
            price: "$6.50 – $16.99",
            rating: 5,
        },
        {
            image:
                "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL600_SR600,600_.jpg",
            title: "A Banquet of Mouse",
            price: "$12.00 – $18.00",
            rating: 5,
        },
    ];

    return (
        <section className="py-12 max-w-6xl mx-auto  px-4 md:px-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left Side - Featured Book */}
                <div className="md:col-span-2 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <img
                        src={featuredBook.image}
                        alt={featuredBook.title}
                        className="w-84 h-95 object-cover rounded-lg shadow-md"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">{featuredBook.title}</h2>
                        <p className="text-gray-700 mb-2">
                            <span className="font-semibold text-red-500">Author:</span>{" "}
                            {featuredBook.author}
                        </p>
                        <p className="text-gray-600 mb-4">{featuredBook.description}</p>
                        <p className="text-lg font-semibold mb-4">
                            Price:{" "}
                            <span className="text-red-500">{featuredBook.price}</span>
                        </p>
                        {/* Outline Button with Hover Effect */}
                        <Link
                            to="/books"
                            className="border-2 border-black text-black px-6 py-3 rounded hover:bg-indigo-600 hover:text-white transition inline-block"
                        >
                            SHOP ONLINE
                        </Link>
                    </div>
                </div>

                {/* Right Side - What's New */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-center md:text-left">
                        WHAT'S NEW
                    </h3>
                    <div className="space-y-6">
                        {whatsNew.map((book, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-center md:items-start md:gap-4 text-center md:text-left"
                            >
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-16 h-20 object-cover rounded mb-2 md:mb-0"
                                />
                                <div>
                                    <h4 className="font-semibold">{book.title}</h4>
                                    <div className="text-yellow-500">
                                        {"★".repeat(book.rating)}{" "}
                                        {"☆".repeat(5 - book.rating)}
                                    </div>
                                    <p className="text-red-500">{book.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center md:text-left">
                        <a
                            href="#"
                            className="text-red-500 font-semibold hover:underline flex items-center justify-center md:justify-start gap-2"
                        >
                            View More →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBestseller;

