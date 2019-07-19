import React from 'react';
import homeStore from 'store/Home';


function Login() {
	const [homeState] = homeStore();
	const { counter, status, repos } = homeState;

	const mapRepos = repos => {
		return repos.map(repo => (
			<a
				key={repo.id}
				href={repo.html_url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h3>{repo.name}</h3>
			</a>
		));
	};

	return (
		<div>
			<p>
				counter:
        {counter}
			</p>
			{status === "SUCCESS" && mapRepos(repos)}
		</div>
	);
}

export default Login;


