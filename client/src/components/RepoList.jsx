export default function RepoList({ repos }) {
  if (!repos.length) return <p>No repositories found</p>;

  return (
    <div>
      <h2>Top Repositories</h2>
      {repos.map((repo, i) => (
        <div key={i} style={{ margin: "10px", border: "1px solid gray" }}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>⭐ {repo.stars} | 🍴 {repo.forks}</p>
        </div>
      ))}
    </div>
  );
}