import React from "react";

const FilterBar = ({ serviceTypes, activeFilter, setActiveFilter }) => {
  const filters = [
    { type: "All", emoji: "🌐", color: "bg-gray-200" },
    { type: "Selected", emoji: "✅", color: "bg-gray-200" },
    ...serviceTypes.map((type) => ({
      type: type.type,
      emoji: type.emoji,
      color: type.color,
    })),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {filters.map(({ type, emoji, color }) => (
        <button
          key={type}
          onClick={() => setActiveFilter(type)}
          className={`rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 ${
            activeFilter === type
              ? "bg-black text-white"
              : `${color} text-black`
          } hover:bg-opacity-80 transition`}
        >
          <span className="text-lg">{emoji}</span>
          <span>{type}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
