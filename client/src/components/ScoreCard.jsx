export default function ScoreCard({ score }) {
    return (
      <div className="p-4 shadow rounded bg-white">
        <h2 className="text-xl font-bold">Score</h2>
        <p className="text-3xl">{score}</p>
      </div>
    );
  }