import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!user) return alert("Enter username");
    navigate(`/report/${user}`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white h-screen flex flex-col items-center justify-center">

    <h1 className="text-5xl font-bold mb-6 text-blue-300">
      Portfolio Evaluator
    </h1>
  
    <input
      className="p-3 rounded-lg text-black w-80 mb-4"
      placeholder="Enter GitHub username"
      onChange={(e) => setUser(e.target.value)}
    />
  
    <button
      onClick={handleSearch}
      className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
    >
      Analyze
    </button>
  </div>
  );
}