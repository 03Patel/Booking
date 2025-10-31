import React, { useState } from "react";

function Navbar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value.trim()); // Live search
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Highway Delite</h1>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search Experience"
            className="border border-gray-300 rounded-md px-3 py-1.5 w-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
          />
          <button
            onClick={() => onSearch(query.trim())}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-md px-4 py-1.5 text-sm"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
