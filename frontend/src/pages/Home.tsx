import React, { useEffect, useState } from "react";
import API from "../api/axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

// ✅ Define the Experience type
type Experience = {
  _id?: string;
  title?: string;
  location?: string;
  [key: string]: any;
};

function Home() {
  // ✅ Explicitly type the states
  const [list, setList] = useState<Experience[]>([]);
  const [filtered, setFiltered] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    API.get("/experiences")
      .then((res) => {
        setList(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error fetching:", err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Add type for query
  const handleSearch = (query: string) => {
    if (!query) {
      setFiltered(list);
      return;
    }

    const result = list.filter(
      (exp) =>
        exp.title?.toLowerCase().includes(query.toLowerCase()) ||
        exp.location?.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(result);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Experiences</h1>

        {loading ? (
          <p>Loading...</p>
        ) : filtered.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((x) => (
              <Card key={x._id || Math.random()} experience={x} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No experiences found.
          </p>
        )}
      </div>
    </>
  );
}

export default Home;
