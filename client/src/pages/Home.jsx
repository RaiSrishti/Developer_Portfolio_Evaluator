import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (username) => {
    navigate(`/report/${username}`);
  };

  return (
    <div className="p-10">
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}