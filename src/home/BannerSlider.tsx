// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // For arrows

// const slides = [
//   {
//     id: 1,
//     image:
//       "https://follettsoftware.com/wp-content/uploads/2024/08/Schoolboy-selecting-a-book-from-bookcase-in-library.jpeg",
//     title: "Explore Knowledge Without Boundaries",
//     description:
//       "Find your next favorite book and manage your reading journey with ease and elegance.",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.ala.org/sites/default/files/styles/tab_group_main_image_lg/public/2024-03/Become%20a%20Librarian%20header.jpg.webp?itok=gsjaG8Nx",
//     title: "Organized Library System",
//     description:
//       "Keep track of borrowed books, availability, and details — all in one responsive dashboard.",
//   },
//   {
//     id: 3,
//     image:
//       "https://www.euroschoolindia.com/blogs/wp-content/uploads/2024/05/mumbai-libraries.webp",
//     title: "Future-Ready Library",
//     description:
//       "Modern features and clean UI to support learning and digital book management.",
//   },
// ];

// const BannerSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-[80vh] overflow-hidden rounded-b-lg shadow-lg">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             currentSlide === index ? "opacity-100 z-20" : "opacity-0 z-10"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="w-full h-full object-cover"
//           />
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6">
//             <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
//               {slide.title}
//             </h2>
//             <p className="text-md sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
//               {slide.description}
//             </p>
//             <Link
//               to="/books"
//               className="text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg transition"
//             >
//               Browse Books
//             </Link>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-30 transition"
//       >
//         <ChevronLeft size={32} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-30 transition"
//       >
//         <ChevronRight size={32} />
//       </button>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-4 h-4 rounded-full transition ${
//               currentSlide === index
//                 ? "bg-indigo-600 scale-110"
//                 : "bg-gray-400 hover:bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BannerSlider;



import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://watermark.lovepik.com/photo/20211130/large/lovepik-library-background-picture_501201876.jpg",
    title: "Explore Knowledge Without Boundaries",
    description:
      "Find your next favorite book and manage your reading journey with ease and elegance.",
  },
  {
    id: 2,
    image:
      "https://watermark.lovepik.com/photo/20211119/large/lovepik-a-quiet-library-picture_500210597.jpg",
    title: "Organized Library System",
    description:
      "Keep track of borrowed books, availability, and details — all in one responsive dashboard.",
  },
  {
    id: 3,
    image:
      "https://watermark.lovepik.com/photo/20211121/large/lovepik-a-spacious-and-bright-library-reading-room-picture_500583449.jpg",
    title: "Future-Ready Library",
    description:
      "Modern features and clean UI to support learning and digital book management.",
  },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-b-lg shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
              {slide.title}
            </h2>
            <p className="text-md sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
              {slide.description}
            </p>
            <Link
              to="/books"
              className="text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Browse Books
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition ${
              currentSlide === index
                ? "bg-indigo-600 scale-110"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
