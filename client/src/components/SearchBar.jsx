import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  return (
    <div className="flex gap-2">
      <input
        className="border p-2 rounded w-full"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 rounded"
        onClick={() => onSearch(username)}
      >
        Search
      </button>
    </div>
  );
}