import React from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
};

//! Iteragir com API`s externas
export const UseEffectEx3 = () => {
  const [repos, setRepos] = React.useState<Repo[]>([]);

  React.useEffect(() => {
    let mounted = true;

    (async () => {
      const response = await fetch(
        "https://api.github.com/users/lucasspeixoto/repos"
      );

      const data = await response.json();

      if (data && mounted) {
        if (!response.ok) {
          throw new Error("Something went wrong while fetching data!");
        }

        if (response.ok) setRepos(data);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
