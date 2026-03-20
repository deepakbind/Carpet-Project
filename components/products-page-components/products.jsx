// import React, { useContext, useEffect, useState } from "react";
// // import Button from "../buttons-components/solidbutton";
// import {
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Button,
// } from "@chakra-ui/react";
// import ImageSlider from "./imageSlider";
// import { CartContext } from "../../context/cartContext";
// import { formatCompactNumber } from "../../constants/formatNumber";
// import { motion } from "framer-motion";
// import { animationVariants } from "../../constants/animationVariants";
// import { useParams } from "react-router";
// import { rentHouses } from "../../constants/data";
// import ExculusivePropertyCard from "../home-page-components/exculusivePropertyCard";
// const Product = ({
//   id,
//   title,
//   moreImages,
//   mainImage,
//   descr,
//   details,
//   price,
// }) => {
//   const [btnLoader, setBtnLoader] = useState(false);

//   const [inpt, setInpt] = useState(1);
//   const { cartItems, addToCart, modal, setModal } = useContext(CartContext);

//   const [otherItems, setOtherItems] = useState([]);

//   const handleAddToCart = () => {
//     setBtnLoader(true);
//     setTimeout(() => {
//       setBtnLoader(false);
//       let currentInpValue = document.getElementById("inp");

//       const newItem = {
//         id: id,
//         name: title,
//         image: mainImage,
//         quantity: Number(currentInpValue.value),
//         price: price,
//       };
//       addToCart(newItem);
//       setInpt(1);
//       setModal(true);
//     }, 400);
//   };

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   useEffect(() => {
//     setOtherItems(
//       rentHouses.filter((e, i) => {
//         return e.id != id;
//       }),
//     );
//   }, []);
//   useEffect(() => {
//     const body = document.getElementsByTagName("body").item(0);
//     if (modal) {
//       body.style.overflowY = "hidden";
//     } else {
//       body.style.overflowY = "auto";
//     }
//   }, [modal]);
//   return (
//     <>
//       {/* <ImageSlider images={moreImages} /> */}
//       <div
//         style={{ maxWidth: 1200 }}
//         className="mx-auto mt-40 max-lg:mt-32 max-md:mt-28  pt-0 p-20 px-10 max-lg:px-5 flex max-lg:flex-wrap-reverse gap-10 "
//       >
//         <div className="w-2/4 max-lg:w-full  flex flex-col gap-5">
//           {moreImages.map((e, i) => {
//             return (
//               <motion.div
//                 key={i}
//                 initial="initial"
//                 whileInView="animate"
//                 variants={animationVariants.zoomIn}
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 <img
//                   className="w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] object-cover"
//                   src={e}
//                   alt={e}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//         <div className="w-2/4 max-lg:w-full relative">
//           <motion.div
//             initial="initial"
//             whileInView="animate"
//             variants={animationVariants.fadeUp}
//             viewport={{ once: true, amount: 0.2 }}
//             className="sticky max-lg:static top-32 flex flex-col gap-4"
//           >
//             <h1 className="text-5xl font-semibold">Carpet in {title}</h1>
//             <p className="details text-2xl">{descr}</p>
//             <div>
//               <h2 className="text-xl text-red-500 font-semibold">Price:</h2>
//               <h2 className="text-2xl mt-2 font-semibold">
//                 PKR {formatCompactNumber(price)}/Month
//               </h2>
//             </div>
//             <div className="flex flex-col gap-2">
//               <h2 className="text-xl text-red-500 font-semibold">Quantity</h2>

//               <NumberInput
//                 borderColor={"#696969"}
//                 focusBorderColor="#a7a7a7"
//                 _placeholder={{ color: "#696969" }}
//                 variant={"flushed"}
//                 min={1}
//                 id="inp"
//                 size={"lg"}
//                 className="mt-4 max-lg:w-72 max-sm:w-full"
//                 value={inpt}
//                 onChange={(e) => {
//                   setInpt(Number(e));
//                 }}
//               >
//                 <NumberInputField fontSize={"xl"} paddingX={"2"} />
//                 <NumberInputStepper>
//                   <NumberIncrementStepper />
//                   <NumberDecrementStepper />
//                 </NumberInputStepper>
//               </NumberInput>
//               {/* <Button
//                 // _hover={{ borderColor: "#d5515e" }}
//                 _hover={{ backgroundColor: "white", color: "#d5515e" }}
//                 backgroundColor={"#d5515e"}
//                 color={"white"}
//                 borderColor={"#d5515e"}
//                 variant={"outline"}
//                 size={"lg"}
//                 isLoading={btnLoader}
//                 loadingText={"Adding to Cart"}
//                 onClick={handleAddToCart}
//                 className="mt-4 max-lg:w-72 max-sm:w-full"
//               >
//                 Add to Cart
//               </Button> */}
//               <Button
//                 _hover={{ backgroundColor: "white", color: "#25D366" }}
//                 backgroundColor={"#25D366"}
//                 color={"white"}
//                 borderColor={"#25D366"}
//                 variant={"outline"}
//                 size={"lg"}
//                 className="mt-4 max-lg:w-72 max-sm:w-full"
//                 onClick={() => {
//                   const message = `Hello, I am interested in ${title}`;
//                   window.open(
//                     `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
//                     "_blank",
//                   );
//                 }}
//               >
//                 WhatsApp Inquiry
//               </Button>
//             </div>
//             <div className="flex text-xl flex-col gap-2">
//               <h2 className=" text-red-500 font-semibold">Details</h2>
//               <p>{descr}</p>
//               <ul className="list-disc list-inside ml-2">
//                 {details.map((e, i) => {
//                   return <li key={i}>{e}</li>;
//                 })}
//               </ul>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//       <div
//         style={{ maxWidth: 1200 }}
//         className="mx-auto mt-10 pt-0 p-20 px-10 max-lg:px-5 "
//       >
//         <motion.h1
//           initial="initial"
//           whileInView="animate"
//           variants={animationVariants.fadeUp}
//           viewport={{ once: true, amount: 0.2 }}
//           className="text-4xl font-semibold"
//         >
//           Just For You
//         </motion.h1>
//         <div className="grid grid-cols-2 grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-5 gap-5 mt-10">
//           {otherItems.map((e, i) => {
//             return (
//               <div
//                 key={i}
//                 className={
//                   i === otherItems.length - 1
//                     ? "col-span-2 max-sm:col-auto"
//                     : ""
//                 }
//               >
//                 <ExculusivePropertyCard
//                   imgSrc={e.mainImage}
//                   titlePart1={"Carpet in "}
//                   titlePart2={e.name}
//                   pricing={e.price}
//                   href={e.id}
//                   type={e.type}
//                   bgColor={"bg-white"}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;


import React, { useContext, useEffect, useState } from "react";
import Showcase2Card from "../showcase2-components/showcase2Card";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import { CartContext } from "../../context/cartContext";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { rentHouses } from "../../constants/data";
import ExculusivePropertyCard from "../home-page-components/exculusivePropertyCard";

const Product = ({
  id,
  title,
  moreImages,
  mainImage,
  descr,
  details,
  price,
}) => {
  const [inpt, setInpt] = useState(1);
  const { cartItems, modal } = useContext(CartContext);

  const [otherItems, setOtherItems] = useState([]);

  // ✅ MAIN IMAGE STATE (IMPORTANT)
  const [mainImg, setMainImg] = useState(mainImage || moreImages[0]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setOtherItems(rentHouses.filter((e) => e.id !== id));
  }, [id]);

  useEffect(() => {
    const body = document.body;
    body.style.overflowY = modal ? "hidden" : "auto";
  }, [modal]);

  return (
    <>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto mt-40 max-lg:mt-32 max-md:mt-28 p-20 px-10 max-lg:px-5 flex max-lg:flex-wrap-reverse gap-10"
      >
        {/* ✅ LEFT SIDE (IMAGE + THUMBNAILS) */}
        <div className="w-2/4 max-lg:w-full">

          {/* MAIN IMAGE */}
          <motion.img
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomIn}
            viewport={{ once: true }}
            src={mainImg}
            className="w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] object-cover rounded-lg"
            alt=""
          />

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4">
            {moreImages.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImg(img)}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImg === img ? "border-blue-500" : "border-gray-200"
                }`}
                alt=""
              />
            ))}
          </div>

        </div>

        {/* ✅ RIGHT SIDE */}
        <div className="w-2/4 max-lg:w-full relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true }}
            className="sticky max-lg:static top-32 flex flex-col gap-4"
          >
            <h1 className="text-4xl font-semibold">{title}</h1>

            <p className="text-gray-500">{descr}</p>

            {/* PRICE */}
            <h2 className="text-3xl font-bold text-blue-500">
              ₹{price}
            </h2>

            {/* SPECIFICATIONS */}
            <div className="bg-gray-100 rounded-lg p-4 mt-2">

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

            {/* TAGS */}
            <div className="flex gap-2 mt-2">
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

            {/* QUANTITY */}
            <div>
              <h2 className="text-lg font-semibold mt-2">Quantity</h2>
              <NumberInput
                min={1}
                value={inpt}
                onChange={(e) => setInpt(Number(e))}
                className="mt-2 max-lg:w-72 max-sm:w-full"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>

            {/* WHATSAPP BUTTON */}
            <Button
              _hover={{ backgroundColor: "white", color: "#25D366" }}
              backgroundColor={"#25D366"}
              color={"white"}
              borderColor={"#25D366"}
              variant={"outline"}
              size={"lg"}
              className="mt-4 max-lg:w-72 max-sm:w-full"
              onClick={() => {
                const message = `Hello, I am interested in ${title}`;
                window.open(
                  `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
                  "_blank"
                );
              }}
            >
              WhatsApp Inquiry
            </Button>

            {/* DETAILS */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Details</h2>
              <p className="text-gray-600">{descr}</p>

              <ul className="list-disc list-inside mt-2">
                {details.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {/* <div
        style={{ maxWidth: 1200 }}
        className="mx-auto mt-10 p-20 px-10 max-lg:px-5"
      >
        <h1 className="text-3xl font-semibold">Just For You</h1>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mt-6">
          {otherItems.map((e, i) => (
            <ExculusivePropertyCard
              key={i}
              imgSrc={e.mainImage}
              titlePart1={"Carpet in "}
              titlePart2={e.name}
              pricing={e.price}
              href={e.id}
              type={e.type}
              bgColor={"bg-white"}
            />
          ))}
        </div>
      </div> */}

      <div
  style={{ maxWidth: 1200 }}
  className="mx-auto mt-10 p-20 px-10 max-lg:px-5"
>
  <h1 className="text-3xl font-semibold">Just For You</h1>

  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mt-6">
    {otherItems.map((e) => (
      <Showcase2Card
        key={e.id}
        id={e.id}
        src={e.mainImage}
        images={e.moreImages}
        title={e.name}
        description={e.description}
        price={e.price}
      />
    ))}
  </div>
</div>
    </>
  );
};

export default Product;