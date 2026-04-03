import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/api";
import RadarChart from "../components/RadarChart";
import ScoreCircle from "../components/ScoreCard"; 
import LanguageChart from "../components/LanguageChart";
import ShareButton from "../components/ShareButton";

export default function Report() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/profile/${username}`)
      .then((res) => setData(res.data))
      .catch(() => alert("User not found"));
  }, [username]);

  // ✅ Safe loading UI
  if (!data) {
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white px-6 py-10">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 shadow-lg mb-10">
          <img
            src={data.avatarUrl}
            alt="avatar"
            className="w-20 h-20 rounded-full border-4 border-blue-400"
          />

          <div>
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-gray-400 text-sm">
              {data.bio || "No bio available"}
            </p>

            <div className="flex gap-5 mt-2 text-sm text-gray-300">
              <span>👥 {data.followers}</span>
              <span>📦 {data.publicRepos}</span>
            </div>
          </div>
        </div>

        <ShareButton /> {/* Share Button */}
        {/* Score + Chart */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Score */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-center items-center">
            <ScoreCircle score={data?.scores?.overall || 0} />
          </div>

          {/* Chart */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-center items-center">
            <div className="w-full max-w-xs">
              <RadarChart scores={data?.scores} />
            </div>
          </div>
        </div>

{/* Language Section */}
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg mb-10">
  <h2 className="text-lg mb-4 text-blue-300">Languages Used</h2>
  <LanguageChart languages={data.languages} />
</div>

        {/* Repo Section */}
        <div>
          <h2 className="text-xl mb-6 text-blue-300">Top Repositories</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.topRepos?.map((repo, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-md hover:scale-105 transition"
              >
                <h3 className="text-lg font-semibold text-blue-200">
                  {repo.name}
                </h3>

                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {repo.description || "No description"}
                </p>

                <div className="flex justify-between mt-4 text-sm text-gray-300">
                  <span>⭐ {repo.stars}</span>
                  <span>🍴 {repo.forks}</span>
                  <span>{repo.language}</span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 text-sm mt-3 inline-block hover:underline"
                >
                  View Repo →
                </a>
              </div>
            ))}
          </div>
        </div>

        <p className="text-blue-400 mt-4">
  Share: {window.location.href}
</p>

      </div>
    </div>
  );
}