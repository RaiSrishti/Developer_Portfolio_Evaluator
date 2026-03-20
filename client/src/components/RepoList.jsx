export default function RepoList({ repos }) {
    return (
      <div>
        <h2 className="font-bold text-lg">Repositories</h2>
        {repos.map((repo) => (
          <div key={repo.id} className="border p-2 my-2">
            <p>{repo.name}</p>
            <p>⭐ {repo.stargazers_count}</p>
          </div>
        ))}
      </div>
    );
  }