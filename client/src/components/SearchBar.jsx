import { useState } from "react";
import API from "../utils/api";

export default function SearchBar() {
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    const res = await API.get(`/profile/${username}`);
    window.location.href = `/report/${username}`;
  };

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
