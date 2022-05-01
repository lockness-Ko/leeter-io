import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<header className="App-header">
				<h1>Leeter</h1>
				<img src={logo} className="App-logo" alt="leeter.io logo" />
				<p>
					A fast paced ctf/wargaming speedrunning app
				</p>
				{/* <a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a> */}
			</header>
		</>
	);
}

export default App;
