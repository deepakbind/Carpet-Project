// import { showCase } from "../../constants/showcase";
// import { useState } from "react";

// const ShowcaseFilter = ({ setFilteredData }) => {
//   const [selectedCity, setSelectedCity] = useState("All");

//   const cities = ["All", ...new Set(showCase.map((item) => item.city))];

//   const handleFilter = (city) => {
//     setSelectedCity(city);

//     if (city === "All") {
//       setFilteredData(showCase);
//     } else {
//       const filtered = showCase.filter((item) => item.city === city);
//       setFilteredData(filtered);
//     }
//   };

//   const resetFilter = () => {
//     setSelectedCity("All");
//     setFilteredData(showCase);
//   };

//   return (
//     <aside className="w-[250px] border rounded-lg p-5 sticky top-36 self-start h-fit bg-white">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-semibold text-lg">Filters</h3>
//         <button
//           onClick={resetFilter}
//           className="text-sm text-blue-600 hover:underline"
//         >
//           Reset
//         </button>
//       </div>
//       <div className="flex flex-col gap-3">
//         {cities.map((city) => (
//           <label key={city} className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               name="city"
//               checked={selectedCity === city}
//               onChange={() => handleFilter(city)}
//             />
//             <span>{city}</span>
//           </label>
//         ))}
//       </div>
//     </aside>
    
//   );
// };

// export default ShowcaseFilter;



// new code added


import { showCase } from "../../constants/showcase";
import { useState } from "react";

const ShowcaseFilter = ({ setFilteredData }) => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [search, setSearch] = useState(""); // ✅ NEW

  const cities = ["All", ...new Set(showCase.map((item) => item.city))];
  const materials = ["All", ...new Set(showCase.map((item) => item.material))];
  const colors = ["All", ...new Set(showCase.map((item) => item.color))];

  // ✅ COMBINED FILTER (SEARCH + ALL FILTERS)
  const applyFilter = (city, material, color, searchText) => {
    let filtered = showCase;

    // 🔍 SEARCH FILTER
    if (searchText) {
      filtered = filtered.filter((item) =>
        item.city.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (city !== "All") {
      filtered = filtered.filter((item) => item.city === city);
    }

    if (material !== "All") {
      filtered = filtered.filter((item) => item.material === material);
    }

    if (color !== "All") {
      filtered = filtered.filter((item) => item.color === color);
    }

    setFilteredData(filtered);
  };

  // HANDLERS
  const handleCity = (city) => {
    setSelectedCity(city);
    applyFilter(city, selectedMaterial, selectedColor, search);
  };

  const handleMaterial = (material) => {
    setSelectedMaterial(material);
    applyFilter(selectedCity, material, selectedColor, search);
  };

  const handleColor = (color) => {
    setSelectedColor(color);
    applyFilter(selectedCity, selectedMaterial, color, search);
  };

  // 🔍 SEARCH HANDLER
  const handleSearch = (value) => {
    setSearch(value);
    applyFilter(selectedCity, selectedMaterial, selectedColor, value);
  };

  // RESET
  const resetFilter = () => {
    setSelectedCity("All");
    setSelectedMaterial("All");
    setSelectedColor("All");
    setSearch(""); // ✅ RESET SEARCH
    setFilteredData(showCase);
  };

  return (
    <aside className="w-[250px] border rounded-lg p-5 sticky top-36 self-start h-fit bg-white">

      {/* 🔍 SEARCH BAR (TOP PE) */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search carpets..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button
          onClick={resetFilter}
          className="text-sm text-blue-600 hover:underline"
        >
          Reset
        </button>
      </div>

      {/* City */}
      <h4 className="font-semibold mt-2 mb-2">City</h4>
      <div className="flex flex-col gap-2 mb-4">
        {cities.map((city) => (
          <label key={city} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="city"
              checked={selectedCity === city}
              onChange={() => handleCity(city)}
            />
            <span>{city}</span>
          </label>
        ))}
      </div>

      {/* Material */}
      <h4 className="font-semibold mt-2 mb-2">Material</h4>
      <div className="flex flex-col gap-2 mb-4">
        {materials.map((material) => (
          <label key={material} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              checked={selectedMaterial === material}
              onChange={() => handleMaterial(material)}
            />
            <span>{material}</span>
          </label>
        ))}
      </div>

      {/* Color */}
      <h4 className="font-semibold mt-2 mb-2">Color</h4>
      <div className="flex flex-col gap-2">
        {colors.map((color) => (
          <label key={color} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="color"
              checked={selectedColor === color}
              onChange={() => handleColor(color)}
            />
            <span>{color}</span>
          </label>
        ))}
      </div>

    </aside>
  );
};

export default ShowcaseFilter;

