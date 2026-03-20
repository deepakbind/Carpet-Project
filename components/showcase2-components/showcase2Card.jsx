// import React from "react";
// import { Link } from "react-router-dom";
// import { scrollToTop } from "../../constants/scrollToTop";
// import { motion } from "framer-motion";
// import { animationVariants } from "../../constants/animationVariants";
// const Showcase2Card = ({ src, href, title }) => {
//   return (
//     <motion.div
//       initial="initial"
//       whileInView="animate"
//       variants={animationVariants.fadeUp}
//       viewport={{ once: true, amount: 0.2 }}
//       style={{ height: 380 }}
//       className="relative w-full"
//     >
//       <div className="z-40 w-full h-full top-4 opacity-0 hover:opacity-100 transition-all duration-500 max-sm:top-2 max-sm:right-2 right-4 absolute pt-72 pl-10 bg-red-500">
//         <Link
//           onClick={scrollToTop}
//           to={href}
//           className="text-3xl text-left w-fit text-white hover:text-black transition-all cursor-pointer "
//         >
//           {title}
//         </Link>
//       </div>
//       <img className="w-full h-full object-cover" src={src} alt="img" />
//     </motion.div>
//   );
// };

// export default Showcase2Card;

// new code added


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { scrollToTop } from "../../constants/scrollToTop";
// import { motion } from "framer-motion";
// import { animationVariants } from "../../constants/animationVariants";

// const Showcase2Card = ({ src, href, title, description }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <motion.div
//         initial="initial"
//         whileInView="animate"
//         variants={animationVariants.fadeUp}
//         viewport={{ once: true, amount: 0.2 }}
//         style={{ height: 380 }}
//         className="relative w-full group"
//       >

//         {/* Hover Overlay */}
//         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center gap-4 z-40">

//           <h3 className="text-2xl text-white font-semibold">{title}</h3>

//           <div className="flex gap-3">
            
//             {/* Quick View */}
//             <button
//               onClick={() => setOpen(true)}
//               className="px-4 py-2 bg-white text-black text-sm rounded hover:bg-gray-200"
//             >
//               Quick View
//             </button>

//             {/* View Details */}
//             <Link
//               onClick={scrollToTop}
//               to={href}
//               className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
//             >
//               View Details
//             </Link>

//           </div>
//         </div>

//         {/* Image */}
//         <img className="w-full h-full object-cover" src={src} alt="img" />
//       </motion.div>

//       {/* Quick View Modal */}
//       {open && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

//           <div className="bg-white rounded-lg p-6 w-[450px] relative">

//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-2 right-3 text-2xl"
//             >
//               ×
//             </button>

//             <img src={src} alt="" className="w-full h-60 object-cover mb-4" />

//             <h3 className="text-xl font-semibold mb-2">{title}</h3>

//             <p className="text-gray-600 text-sm mb-4">{description}</p>

//             <Link
//               onClick={scrollToTop}
//               to={href}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               View Full Details
//             </Link>

//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Showcase2Card;


// now new added code
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { scrollToTop } from "../../constants/scrollToTop";

// const Showcase2Card = ({ src, images = [], href, title, price }) => {

//   const [open, setOpen] = useState(false);
//   const [mainImg, setMainImg] = useState(src);

//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden group">

//       {/* IMAGE */}
//       <div className="relative">

//         <img
//           src={mainImg}
//           className="w-full h-[260px] object-cover"
//           alt=""
//         />

//         {/* HOVER BUTTONS */}
//         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition-all duration-300">

//           <button
//             onClick={() => setOpen(!open)}
//             className="bg-white px-4 py-2 text-sm rounded"
//           >
//             Quick View
//           </button>

//           <Link
//             onClick={scrollToTop}
//             to={href}
//             className="bg-red-500 text-white px-4 py-2 text-sm rounded"
//           >
//             View Details
//           </Link>

//         </div>

//       </div>

//       {/* CARD DETAILS */}
//       <div className="p-5">

//         <p className="text-blue-600 text-xs font-semibold uppercase">
//           Traditional
//         </p>

//         <h3 className="text-lg font-semibold">
//           {title}
//         </h3>

//         <p className="text-gray-500 text-sm">
//           Wool • 8x10 ft • Red
//         </p>

//         <h4 className="text-2xl font-bold text-blue-600 mt-2">
//           ₹{price}
//         </h4>

//         <div className="flex gap-2 mt-3">
//           <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//             handmade
//           </span>

//           <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//             luxury
//           </span>
//         </div>

//       </div>

//       {/* QUICK VIEW EXPAND */}
//       {open && (
//         <div className="border-t p-5">

//           <div className="flex gap-3 mb-4">

//             {images.slice(0,3).map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 onClick={() => setMainImg(img)}
//                 className="w-24 h-20 object-cover rounded cursor-pointer border"
//                 alt=""
//               />
//             ))}

//           </div>

//           <div className="flex gap-3">

//             <Link
//               onClick={scrollToTop}
//               to={href}
//               className="bg-black text-white px-4 py-2 rounded text-sm"
//             >
//               View Full Details
//             </Link>

//             <a
//               href="https://wa.me/91XXXXXXXXXX"
//               className="bg-green-500 text-white px-4 py-2 rounded text-sm"
//             >
//               WhatsApp Inquiry
//             </a>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default Showcase2Card;



// 7 oclock 16-3-26



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { scrollToTop } from "../../constants/scrollToTop";

// const Showcase2Card = ({ src, images = [], href, title, price }) => {
//   const [open, setOpen] = useState(false);
//   const [mainImg, setMainImg] = useState(src);

//   return (
//     <>
//       {/* CARD */}
//       <div className="bg-white rounded-xl shadow-md overflow-hidden group">

//         {/* IMAGE */}
//         <div className="relative">
//           <img
//             src={src}
//             className="w-full h-[260px] object-cover"
//             alt=""
//           />

//           {/* HOVER BUTTONS */}
//           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition-all duration-300">
            
//             <button
//               onClick={() => {
//                 setMainImg(src);
//                 setOpen(true);
//               }}
//               className="bg-white px-4 py-2 text-sm rounded shadow"
//             >
//               Quick View
//             </button>

//             <Link
//               onClick={scrollToTop}
//               to={href}
//               className="bg-red-500 text-white px-4 py-2 text-sm rounded"
//             >
//               View Details
//             </Link>

//           </div>
//         </div>

//         {/* CARD DETAILS */}
//         <div className="p-5">
//           <p className="text-blue-600 text-xs font-semibold uppercase">
//             Traditional
//           </p>

//           <h3 className="text-lg font-semibold">{title}</h3>

//           <p className="text-gray-500 text-sm">
//             Wool • 8x10 ft • Red
//           </p>

//           <h4 className="text-2xl font-bold text-blue-600 mt-2">
//             ₹{price}
//           </h4>

//           <div className="flex gap-2 mt-3">
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               handmade
//             </span>

//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               luxury
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
//           onClick={() => setOpen(false)}
//         >

//           <div
//             className="bg-white w-[900px] max-w-[95%] rounded-xl p-6 relative"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300"
//             >
//               ✕
//             </button>

//             <div className="flex flex-col md:flex-row gap-6">

//               {/* LEFT IMAGE */}
//               <div className="flex-1">

//                 <img
//                   src={mainImg}
//                   className="w-full rounded-lg"
//                   alt=""
//                 />

//                 <div className="flex gap-3 mt-3">
//                   {[src, ...images].map((img, i) => (
//                     <img
//                       key={i}
//                       src={img}
//                       onClick={() => setMainImg(img)}
//                       className="w-20 h-16 object-cover rounded cursor-pointer border hover:border-blue-500"
//                       alt=""
//                     />
//                   ))}
//                 </div>

//               </div>

//               {/* RIGHT DETAILS */}
//               <div className="flex-1">

//                 <p className="text-blue-600 text-xs font-semibold uppercase">
//                   Traditional
//                 </p>

//                 <h2 className="text-2xl font-bold mt-1">
//                   {title}
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   Premium Kashmiri carpet with delicate craftsmanship
//                 </p>

//                 <h3 className="text-3xl font-bold text-blue-600 mt-4">
//                   ₹{price}
//                 </h3>

//                 <div className="flex gap-3 mt-6">

//                   <Link
//                     onClick={scrollToTop}
//                     to={href}
//                     className="bg-blue-600 text-white px-5 py-2 rounded-lg"
//                   >
//                     View Full Details
//                   </Link>

//                   <a
//                     href="https://wa.me/91XXXXXXXXXX"
//                     className="bg-green-500 text-white px-5 py-2 rounded-lg"
//                   >
//                     WhatsApp Inquiry
//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>
//       )}
//     </>
//   );
// };

// export default Showcase2Card;


// modal view exact 


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { scrollToTop } from "../../constants/scrollToTop";

// const Showcase2Card = ({ src, images = [], href, title, price }) => {
//   const [open, setOpen] = useState(false);
//   const [mainImg, setMainImg] = useState(src);

//   return (
//     <>
//       {/* CARD */}
//       <div className="bg-white rounded-xl shadow-md overflow-hidden group">

//         {/* IMAGE */}
//         <div className="relative">
//           <img
//             src={src}
//             className="w-full h-[260px] object-cover"
//             alt=""
//           />

//           {/* HOVER BUTTONS */}
//           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition-all duration-300">
            
//             <button
//               onClick={() => {
//                 setMainImg(src);
//                 setOpen(true);
//               }}
//               className="bg-white px-4 py-2 text-sm rounded shadow"
//             >
//               Quick View
//             </button>

//             <Link
//               onClick={scrollToTop}
//               to={href}
//               className="bg-red-500 text-white px-4 py-2 text-sm rounded"
//             >
//               View Details
//             </Link>

//           </div>
//         </div>

//         {/* CARD DETAILS */}
//         <div className="p-5">
//           <p className="text-blue-600 text-xs font-semibold uppercase">
//             Traditional
//           </p>

//           <h3 className="text-lg font-semibold">{title}</h3>

//           <p className="text-gray-500 text-sm">
//             Wool • 8x10 ft • Red
//           </p>

//           <h4 className="text-2xl font-bold text-blue-600 mt-2">
//             ₹{price}
//           </h4>

//           <div className="flex gap-2 mt-3">
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               handmade
//             </span>
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               luxury
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* QUICK VIEW MODAL */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
//           onClick={() => setOpen(false)}
//         >

//           <div
//             className="bg-white w-[950px] max-w-[95%] rounded-xl p-8 relative"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-5 right-5 bg-gray-200 w-9 h-9 rounded-full"
//             >
//               ✕
//             </button>

//             <div className="flex flex-col md:flex-row gap-8">

//               {/* LEFT IMAGE */}
//               <div className="md:w-1/2">
//                 <img
//                   src={mainImg}
//                   className="w-full rounded-lg object-cover"
//                   alt=""
//                 />
//               </div>

//               {/* RIGHT DETAILS */}
//               <div className="md:w-1/2 flex flex-col">

//                 <p className="text-blue-500 text-xs font-semibold uppercase">
//                   Traditional
//                 </p>

//                 <h2 className="text-3xl font-bold mt-1">
//                   {title}
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   Handcrafted traditional Persian carpet with intricate floral patterns
//                 </p>

//                 {/* SPECIFICATIONS */}
//                 <div className="bg-gray-100 rounded-lg p-4 mt-4">

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Material:</span>
//                     <span>Wool</span>
//                   </div>

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Size:</span>
//                     <span>8x10 ft</span>
//                   </div>

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Color:</span>
//                     <span>Red</span>
//                   </div>

//                   <div className="flex justify-between py-1">
//                     <span className="font-semibold">Style:</span>
//                     <span>Persian</span>
//                   </div>

//                 </div>

//                 <h3 className="text-3xl font-bold text-blue-500 mt-4">
//                   ₹{price}
//                 </h3>

//                 {/* TAGS */}
//                 <div className="flex gap-2 mt-3">
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     handmade
//                   </span>
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     luxury
//                   </span>
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     traditional
//                   </span>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex gap-4 mt-auto pt-6">

//                   <Link
//                     to={href}
//                     onClick={scrollToTop}
//                     className="bg-blue-500 text-white px-6 py-3 rounded-lg"
//                   >
//                     View Full Details
//                   </Link>

//                   <a
//                     href="https://wa.me/91XXXXXXXXXX"
//                     className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center"
//                   >
//                     WhatsApp Inquiry
//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>
//       )}
//     </>
//   );
// };

// export default Showcase2Card;
// everythink is upto date

// import React, { useState } from "react";
// import { scrollToTop } from "../../constants/scrollToTop";

// const Showcase2Card = ({ src, images = [], href, title, price }) => {
//   const [open, setOpen] = useState(false);
//   const [mainImg, setMainImg] = useState(src);

//   const handleOpenModal = () => {
//     setMainImg(images[0] || src);
//     setOpen(true);
//   };

//   return (
//     <>
//       {/* CARD */}
//       <div className="bg-white rounded-xl shadow-md overflow-hidden group">

//         {/* IMAGE */}
//         <div className="relative">
//           <img
//             src={src}
//             className="w-full h-[260px] object-cover"
//             alt=""
//           />

//           {/* HOVER BUTTONS */}
//           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition-all duration-300">
            
//             {/* QUICK VIEW */}
//             <button
//               onClick={handleOpenModal}
//               className="bg-white px-4 py-2 text-sm rounded shadow"
//             >
//               Quick View
//             </button>

//             {/* VIEW DETAILS */}
//             <button
//               onClick={handleOpenModal}
//               className="bg-red-500 text-white px-4 py-2 text-sm rounded"
//             >
//               View Details
//             </button>

//           </div>
//         </div>

//         {/* CARD DETAILS */}
//         <div className="p-5">
//           <p className="text-blue-600 text-xs font-semibold uppercase">
//             Traditional
//           </p>

//           <h3 className="text-lg font-semibold">{title}</h3>

//           <p className="text-gray-500 text-sm">
//             Wool • 8x10 ft • Red
//           </p>

//           <h4 className="text-2xl font-bold text-blue-600 mt-2">
//             ₹{price}
//           </h4>

//           <div className="flex gap-2 mt-3">
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               handmade
//             </span>
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               luxury
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="bg-white w-[950px] max-w-[95%] rounded-xl p-8 relative"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* CLOSE */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-5 right-5 bg-gray-200 w-9 h-9 rounded-full"
//             >
//               ✕
//             </button>

//             <div className="flex flex-col md:flex-row gap-8">

//               {/* IMAGE */}
//               <div className="md:w-1/2">
//                 <img
//                   src={mainImg}
//                   className="w-full rounded-lg object-cover"
//                   alt=""
//                 />
//               </div>

//               {/* DETAILS */}
//               <div className="md:w-1/2 flex flex-col">

//                 <p className="text-blue-500 text-xs font-semibold uppercase">
//                   Traditional
//                 </p>

//                 <h2 className="text-3xl font-bold mt-1">
//                   {title}
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   Handcrafted traditional Persian carpet with intricate floral patterns
//                 </p>

//                 {/* SPECS */}
//                 <div className="bg-gray-100 rounded-lg p-4 mt-4">

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Material:</span>
//                     <span>Wool</span>
//                   </div>

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Size:</span>
//                     <span>8x10 ft</span>
//                   </div>

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Color:</span>
//                     <span>Red</span>
//                   </div>

//                   <div className="flex justify-between py-1">
//                     <span className="font-semibold">Style:</span>
//                     <span>Persian</span>
//                   </div>

//                 </div>

//                 <h3 className="text-3xl font-bold text-blue-500 mt-4">
//                   ₹{price}
//                 </h3>

//                 {/* TAGS */}
//                 <div className="flex gap-2 mt-3">
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     handmade
//                   </span>
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     luxury
//                   </span>
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     traditional
//                   </span>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex gap-4 mt-auto pt-6">

//                   {/* VIEW FULL DETAILS */}
//                   <button
//                     onClick={handleOpenModal}
//                     className="bg-blue-500 text-white px-6 py-3 rounded-lg"
//                   >
//                     View Full Details
//                   </button>

//                   {/* WHATSAPP */}
//                   <a
//                     href={`https://wa.me/91XXXXXXXXXX?text=I am interested in ${title}`}
//                     className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center"
//                   >
//                     WhatsApp Inquiry
//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Showcase2Card;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { scrollToTop } from "../../constants/scrollToTop";

// const Showcase2Card = ({ src, images = [], href, title, price }) => {
//   const [open, setOpen] = useState(false);
//   const [mainImg, setMainImg] = useState(src);
//   const navigate = useNavigate();

//   const handleOpenModal = () => {
//     setMainImg(images[0] || src);
//     setOpen(true);
//   };

//   return (
//     <>
//       {/* CARD */}
//       <div className="bg-white rounded-xl shadow-md overflow-hidden group">

//         {/* IMAGE */}
//         <div className="relative">
//           <img
//             src={src}
//             className="w-full h-[260px] object-cover"
//             alt=""
//           />

//           {/* HOVER BUTTONS */}
//           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition-all duration-300">
            
//             <button
//               onClick={handleOpenModal}
//               className="bg-white px-4 py-2 text-sm rounded shadow"
//             >
//               Quick View
//             </button>

//             <button
//               onClick={handleOpenModal}
//               className="bg-red-500 text-white px-4 py-2 text-sm rounded"
//             >
//               View Details
//             </button>

//           </div>
//         </div>

//         {/* CARD DETAILS */}
//         <div className="p-5">
//           <p className="text-blue-600 text-xs font-semibold uppercase">
//             Traditional
//           </p>

//           <h3 className="text-lg font-semibold">{title}</h3>

//           <p className="text-gray-500 text-sm">
//             Wool • 8x10 ft • Red
//           </p>

//           <h4 className="text-2xl font-bold text-blue-600 mt-2">
//             ₹{price}
//           </h4>

//           <div className="flex gap-2 mt-3">
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               handmade
//             </span>
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               luxury
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="bg-white w-[950px] max-w-[95%] rounded-xl p-8 relative"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-5 right-5 bg-gray-200 w-9 h-9 rounded-full"
//             >
//               ✕
//             </button>

//             <div className="flex flex-col md:flex-row gap-8">

//               {/* IMAGE */}
//               <div className="md:w-1/2">
//                 <img
//                   src={mainImg}
//                   className="w-full rounded-lg object-cover"
//                   alt=""
//                 />
//               </div>

//               {/* DETAILS */}
//               <div className="md:w-1/2 flex flex-col">

//                 <p className="text-blue-500 text-xs font-semibold uppercase">
//                   Traditional
//                 </p>

//                 <h2 className="text-3xl font-bold mt-1">
//                   {title}
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   Handcrafted traditional Persian carpet with intricate floral patterns
//                 </p>

//                 {/* SPECS */}
//                 <div className="bg-gray-100 rounded-lg p-4 mt-4">

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Material:</span>
//                     <span>Wool</span>
//                   </div>

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Size:</span>
//                     <span>8x10 ft</span>
//                   </div>

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Color:</span>
//                     <span>Red</span>
//                   </div>

//                   <div className="flex justify-between py-1">
//                     <span className="font-semibold">Style:</span>
//                     <span>Persian</span>
//                   </div>

//                 </div>

//                 <h3 className="text-3xl font-bold text-blue-500 mt-4">
//                   ₹{price}
//                 </h3>

//                 {/* TAGS */}
//                 <div className="flex gap-2 mt-3">
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     handmade
//                   </span>
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     luxury
//                   </span>
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     traditional
//                   </span>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex gap-4 mt-auto pt-6">

//                   {/* ✅ FIXED BUTTON */}
//                   <button
//                     onClick={() => {
//                       setOpen(false);
//                       scrollToTop();
//                       navigate(href);
//                     }}
//                     className="bg-blue-500 text-white px-6 py-3 rounded-lg"
//                   >
//                     View Full Details
//                   </button>

//                   <a
//                     href={`https://wa.me/91XXXXXXXXXX?text=I am interested in ${title}`}
//                     className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center"
//                   >
//                     WhatsApp Inquiry
//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Showcase2Card;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { scrollToTop } from "../../constants/scrollToTop";

// const Showcase2Card = ({ src, images = [], href, title, price }) => {
//   const [open, setOpen] = useState(false);
//   const [mainImg, setMainImg] = useState(src);

//   const navigate = useNavigate();

//   return (
//     <>
//       {/* CARD */}
//       <div className="bg-white rounded-xl shadow-md overflow-hidden group">

//         {/* IMAGE */}
//         <div className="relative">
//           <img
//             src={src}
//             className="w-full h-[260px] object-cover"
//             alt=""
//           />

//           {/* HOVER BUTTONS */}
//           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition-all duration-300">
            
//             {/* QUICK VIEW */}
//             <button
//               onClick={() => {
//                 setMainImg(src);
//                 setOpen(true);
//               }}
//               className="bg-white px-4 py-2 text-sm rounded shadow"
//             >
//               Quick View
//             </button>

//             {/* VIEW DETAILS → SAME MODAL */}
//             <button
//               onClick={() => {
//                 setMainImg(src);
//                 setOpen(true);
//               }}
//               className="bg-red-500 text-white px-4 py-2 text-sm rounded"
//             >
//               View Details
//             </button>

//           </div>
//         </div>

//         {/* CARD DETAILS */}
//         <div className="p-5">
//           <p className="text-blue-600 text-xs font-semibold uppercase">
//             Traditional
//           </p>

//           <h3 className="text-lg font-semibold">{title}</h3>

//           <p className="text-gray-500 text-sm">
//             Wool • 8x10 ft • Red
//           </p>

//           <h4 className="text-2xl font-bold text-blue-600 mt-2">
//             ₹{price}
//           </h4>

//           <div className="flex gap-2 mt-3">
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               handmade
//             </span>
//             <span className="bg-gray-200 text-xs px-2 py-1 rounded">
//               luxury
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* QUICK VIEW MODAL */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
//           onClick={() => setOpen(false)}
//         >

//           <div
//             className="bg-white w-[950px] max-w-[95%] rounded-xl p-8 relative"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-5 right-5 bg-gray-200 w-9 h-9 rounded-full"
//             >
//               ✕
//             </button>

//             <div className="flex flex-col md:flex-row gap-8">

//               {/* LEFT IMAGE */}
//               <div className="md:w-1/2">
//                 <img
//                   src={mainImg}
//                   className="w-full rounded-lg object-cover"
//                   alt=""
//                 />
//               </div>

//               {/* RIGHT DETAILS */}
//               <div className="md:w-1/2 flex flex-col">

//                 <p className="text-blue-500 text-xs font-semibold uppercase">
//                   Traditional
//                 </p>

//                 <h2 className="text-3xl font-bold mt-1">
//                   {title}
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   Handcrafted traditional Persian carpet with intricate floral patterns
//                 </p>

//                 {/* SPECIFICATIONS */}
//                 <div className="bg-gray-100 rounded-lg p-4 mt-4">

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Material:</span>
//                     <span>Wool</span>
//                   </div>

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Size:</span>
//                     <span>8x10 ft</span>
//                   </div>

//                   <div className="flex justify-between py-1 border-b">
//                     <span className="font-semibold">Color:</span>
//                     <span>Red</span>
//                   </div>

//                   <div className="flex justify-between py-1">
//                     <span className="font-semibold">Style:</span>
//                     <span>Persian</span>
//                   </div>

//                 </div>

//                 <h3 className="text-3xl font-bold text-blue-500 mt-4">
//                   ₹{price}
//                 </h3>

//                 {/* TAGS */}
//                 <div className="flex gap-2 mt-3">
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     handmade
//                   </span>
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     luxury
//                   </span>
//                   <span className="bg-gray-200 px-3 py-1 text-sm rounded">
//                     traditional
//                   </span>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex gap-4 mt-auto pt-6">

//                   {/* ✅ VIEW FULL DETAILS → NEW PAGE */}
//                   <button
//                     onClick={() => {
//                       setOpen(false);
//                       scrollToTop();
//                       navigate(`/collections/${href}`);
//                     }}
//                     className="bg-blue-500 text-white px-6 py-3 rounded-lg"
//                   >
//                     View Full Details
//                   </button>

//                   <a
//                     href="https://wa.me/91XXXXXXXXXX"
//                     className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center"
//                   >
//                     WhatsApp Inquiry
//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>
//       )}
//     </>
//   );
// };

// export default Showcase2Card;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";

const Showcase2Card = ({ src, images = [], id, title, price }) => {
  const [open, setOpen] = useState(false);
  const [mainImg, setMainImg] = useState(src);

  const navigate = useNavigate();

  return (
    <>
      {/* CARD */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden group">
        <div className="relative">
          <img
            src={src}
            className="w-full h-[260px] object-cover"
            alt=""
          />

          {/* HOVER BUTTONS */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition-all duration-300">
            
            {/* QUICK VIEW */}
            <button
              onClick={() => {
                setMainImg(src);
                setOpen(true);
              }}
              className="bg-white px-4 py-2 text-sm rounded shadow"
            >
              Quick View
            </button>

            {/* VIEW DETAILS */}
            <button
              onClick={() => {
                setMainImg(src);
                setOpen(true);
              }}
              className="bg-red-500 text-white px-4 py-2 text-sm rounded"
            >
              View Details
            </button>
          </div>
        </div>

        {/* DETAILS */}
        <div className="p-5">
          <p className="text-blue-600 text-xs font-semibold uppercase">
            Traditional
          </p>

          <h3 className="text-lg font-semibold">{title}</h3>

          <p className="text-gray-500 text-sm">
            Wool • 8x10 ft • Red
          </p>

          <h4 className="text-2xl font-bold text-blue-600 mt-2">
            ₹{price}
          </h4>
        </div>
      </div>

      {/* MODAL */}
     {open && (
  <div
    className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
    onClick={() => setOpen(false)}
  >
    <div
      className="bg-white w-[950px] max-w-[95%] rounded-xl p-6 relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* CLOSE */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 bg-gray-200 w-8 h-8 rounded-full"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* LEFT IMAGE */}
        <div className="md:w-1/2">
          <img
            src={mainImg}
            className="w-full h-[420px] object-cover rounded-lg"
            alt=""
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex flex-col">

          <p className="text-blue-500 text-xs font-semibold uppercase">
            Traditional
          </p>

          <h2 className="text-3xl font-bold mt-1">
            {title}
          </h2>

          <p className="text-gray-500 mt-2">
            Handcrafted traditional Persian carpet with intricate floral patterns
          </p>

          {/* SPECIFICATIONS */}
          <div className="bg-gray-100 rounded-lg p-4 mt-4">

            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Material:</span>
              <span>Wool</span>
            </div>

            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Size:</span>
              <span>8x10 ft</span>
            </div>

            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Color:</span>
              <span>Red</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="font-semibold">Style:</span>
              <span>Persian</span>
            </div>

          </div>

          {/* PRICE */}
          <h3 className="text-3xl font-bold text-blue-500 mt-4">
            ₹{price}
          </h3>

          {/* TAGS */}
          <div className="flex gap-2 mt-3">
            <span className="bg-gray-200 px-3 py-1 text-sm rounded">
              handmade
            </span>
            <span className="bg-gray-200 px-3 py-1 text-sm rounded">
              luxury
            </span>
            <span className="bg-gray-200 px-3 py-1 text-sm rounded">
              traditional
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-auto pt-6">

            {/* VIEW FULL DETAILS */}
            <button
              onClick={() => {
                if (!id) return;
                setOpen(false);
                scrollToTop();
                navigate(`/collections/${id}`);
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            >
              View Full Details
            </button>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center"
            >
              WhatsApp Inquiry
            </a>

          </div>

        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default Showcase2Card;