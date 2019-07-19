import React from 'react';
import homeStore from 'store/Home';

function Home() {
	const [homeState, homeActions] = homeStore();
	const { counter, status, repos } = homeState;

	const searchSubmit = e => {
		e.preventDefault();
		const username = e.target.username.value;
		homeActions.getReposByUsername(username);
	};

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
			<button type="button" onClick={() => homeActions.addToCounter(1)}>
				+1 to global
      </button>
			<br />
			<form onSubmit={searchSubmit}>
				<input name="username" placeholder="username" autoComplete="off" />
				<button type="submit">{status === 'INITIAL' || status === 'SUCCESS' || status === 'NOT_FOUND' ? 'Search' : 'Loading..'}</button>
			</form>
			{status === 'NOT_FOUND' && (<p>NOT FOUND</p>)}
			{status === "LOADING" && (<p>Loading..</p>)}
			{status === "SUCCESS" && mapRepos(repos)}
		</div>
	);
}

export default Home;