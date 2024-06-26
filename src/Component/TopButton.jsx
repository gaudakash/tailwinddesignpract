import React from "react";

const TopButton = () => {
  const cities = [
    { id: 1, title: "london" },
    { id: 2, title: "japan" },
    { id: 3, title: "new york" },
    { id: 4, title: "nepal" },
    { id: 5, title: "sydney" },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className=" text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
