// import Showcase2Card from "../components/showcase2-components/showcase2Card";
// import { showCase } from "../constants/showcase";
// import ShowCase2HeroSection from "../components/showcase2-components/showcase2HeroSecion";
// import { useEffect } from "react";

// const ShowCase2 = () => {
//   useEffect(() => {
//     document.title = "Showcase 2 - Azal";
//   }, []);
//   return (
//     <div className="overflow-hidden">
//       <ShowCase2HeroSection />
//       <div
//         style={{ maxWidth: 1200 }}
//         className="mx-auto gap-10 grid grid-rows-2 grid-cols-3 max-lg:grid-rows-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-6 p-10 max-md:px-5 "
//       >
//         {showCase.map((e, i) => {
//           return (
//             <Showcase2Card
//               href={`/projects/${e.id}`}
//               src={e.coverImage}
//               title={e.city}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ShowCase2;

// new code


// import Showcase2Card from "../components/showcase2-components/showcase2Card";
// import ShowCase2HeroSection from "../components/showcase2-components/showcase2HeroSecion";
// import ShowcaseFilter from "../components/showcase2-components/ShowcaseFilter";
// import { showCase } from "../constants/showcase";
// import { useEffect, useState } from "react";

// const ShowCase2 = () => {
//   const [filteredData, setFilteredData] = useState(showCase);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     document.title = "Showcase 2 - Azal";
//   }, []);

//   // 🔍 SEARCH FILTER LOGIC
//   useEffect(() => {
//     const filtered = showCase.filter((item) =>
//       item.city.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [search]);

//   return (
//     <div>
//       <ShowCase2HeroSection />

//       <div
//         style={{ maxWidth: 1200 }}
//         className="mx-auto flex gap-10 p-10 max-md:px-5"
//       >
//         {/* ✅ FILTER (SEARCH PASS KARO) */}
//         <ShowcaseFilter
//           setFilteredData={setFilteredData}
//           search={search}
//           setSearch={setSearch}
//         />

//         <div className="grid grid-cols-3 gap-10 flex-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
//           {filteredData.map((e) => {
//             return (
//               <Showcase2Card
//                 key={e.id}
//                 id={e.id} // ✅ IMPORTANT
//                 src={e.coverImage}
//                 images={e.moreImages}
//                 title={e.city}
//                 description={e.shortDescription}
//                 material="Wool"
//                 size="8x10 ft"
//                 color="Red"
//                 style="Persian"
//                 price="15000"
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowCase2;


import Showcase2Card from "../components/showcase2-components/showcase2Card";
import ShowCase2HeroSection from "../components/showcase2-components/showcase2HeroSecion";
import ShowcaseFilter from "../components/showcase2-components/ShowcaseFilter";
import { showCase } from "../constants/showcase";
import { useEffect, useState } from "react";

const ShowCase2 = () => {
  const [filteredData, setFilteredData] = useState(showCase);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Showcase 2 - Azal";
  }, []);

  // 🔍 SEARCH FILTER
  useEffect(() => {
    const filtered = showCase.filter((item) =>
      item.city.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search]);

  return (
    <div>
      <ShowCase2HeroSection />

      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto flex gap-10 p-10 max-md:px-5"
      >
        {/* FILTER */}
        <ShowcaseFilter
          setFilteredData={setFilteredData}
          search={search}
          setSearch={setSearch}
        />

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-10 flex-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {filteredData.map((e) => {
            return (
              <Showcase2Card
                key={e.id}
                id={e.id}   // ✅ correct
                src={e.coverImage}
                images={e.moreImages}
                title={e.city}
                price="15000"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowCase2;