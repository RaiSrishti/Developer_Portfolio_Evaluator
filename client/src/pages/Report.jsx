import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProfile } from "../utils/api";
import ScoreCard from "../components/ScoreCard";
import RepoList from "../components/RepoList";

export default function Report() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProfile(username).then((res) => setData(res.data));
  }, [username]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <ScoreCard score={data.score} />
      <RepoList repos={data.repos} />
    </div>
  );
}