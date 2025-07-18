// import React from "react";

// const PickedByReaders: React.FC = () => {
//   const books = [
//     {
//       image:
//         "https://bookends.ae/cdn/shop/files/BE500802911298_525x700.jpg?v=1730997076",
//       title: "White Teeth",
//       author: "Maria Lopez",
//       price: "$28.00",
//     },
//     {
//       image:
//         "https://gregory.ph/cdn/shop/products/BuyYourbestyeareverinthePhilippines.jpg?v=1672914396",
//       title: "The Strings of Murders",
//       author: "Linda Hamilton",
//       price: "$36.00",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfASRc3OG42odsUBFTxcUXxGf48LVKTY8tQ&s",
//       title: "The Story About Me",
//       author: "Carol Foster",
//       oldPrice: "$12.00",
//       price: "$10.00",
//       rating: 4,
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWhE84MmIxRtT1J8VyMqnv9rP7obcMpzQIA&s",
//       title: "The Son",
//       author: "Burt Geller",
//       oldPrice: "$21.00",
//       price: "$12.00",
//       rating: 4,
//     },
//     {
//       image:
//         "https://images-platform.99static.com//-tUjEZmbTnIMpiyAMy6CiS85KYY=/137x101:962x926/fit-in/500x500/projects-files/101/10168/1016819/4d520fb3-bab8-4d4a-a209-17731bb9da86.jpg",
//       title: "The Shed",
//       author: "Jessica Ford",
//       price: "$28.00",
//     },
//   ];

//   return (
//     <section className="py-12 px-4 md:px-10 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-10">Picked by Readers</h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {books.map((book, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center w-48 text-center space-y-2"
//           >
//             <img
//               src={book.image}
//               alt={book.title}
//               className="w-full h-64 object-cover rounded-lg shadow-md"
//             />
//             <h3 className="text-lg font-semibold">{book.title}</h3>
//             <p className="text-gray-500">{book.author}</p>
//             {book.rating && (
//               <div className="flex justify-center text-yellow-500">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <span key={i}>{i < book.rating! ? "★" : "☆"}</span>
//                 ))}
//               </div>
//             )}
//             <div className="text-red-600 font-bold">
//               {book.oldPrice && (
//                 <span className="line-through text-gray-400 mr-2">
//                   {book.oldPrice}
//                 </span>
//               )}
//               {book.price}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PickedByReaders;










import React from "react";

const PickedByReaders: React.FC = () => {
    const books = [
        {
            image:
                "https://bookends.ae/cdn/shop/files/BE500802911298_525x700.jpg?v=1730997076",
            title: "White Teeth",
            author: "Maria Lopez",
            price: "$28.00",
             rating: 4,
        },
        {
            image:
                "https://gregory.ph/cdn/shop/products/BuyYourbestyeareverinthePhilippines.jpg?v=1672914396",
            title: "The Strings of Murders",
            author: "Linda Hamilton",
            price: "$36.00",
            oldPrice: "$18.00",
             rating: 3,
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfASRc3OG42odsUBFTxcUXxGf48LVKTY8tQ&s",
            title: "The Story About Me",
            author: "Carol Foster",
            oldPrice: "$12.00",
            price: "$10.00",
            rating: 4,
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWhE84MmIxRtT1J8VyMqnv9rP7obcMpzQIA&s",
            title: "The Son",
            author: "Burt Geller",
            oldPrice: "$21.00",
            price: "$12.00",
            rating: 4,
        },
        {
            image:
                "https://images-platform.99static.com//-tUjEZmbTnIMpiyAMy6CiS85KYY=/137x101:962x926/fit-in/500x500/projects-files/101/10168/1016819/4d520fb3-bab8-4d4a-a209-17731bb9da86.jpg",
            title: "The Shed",
            author: "Jessica Ford",
            price: "$28.00",
            oldPrice: "$21.00",
            rating: 4,
        },
    ];

    return (
        <section className="py-12 px-4 md:px-10 bg-white">
            <h2 className="text-3xl text-center font-extrabold text-indigo-800 mb-10">
                📚 Picked by Readers
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {books.map((book, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-48 text-center space-y-2"
                    >
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-gray-500">{book.author}</p>
                        {book.rating && (
                            <div className="flex justify-center text-yellow-500">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>{i < book.rating! ? "★" : "☆"}</span>
                                ))}
                            </div>
                        )}
                        <div className="text-red-600 font-bold">
                            {book.oldPrice && (
                                <span className="line-through text-gray-400 mr-2">
                                    {book.oldPrice}
                                </span>
                            )}
                            {book.price}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PickedByReaders;
