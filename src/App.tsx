import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<a
					className='App-link'
					href='https://discogs.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					Hi!
				</a>
			</header>
		</div>
	);
}

export default App;
