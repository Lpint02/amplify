import React, { Component } from "react";
	import logo from "./logo.svg";
	import "./App.css";
	import { BrowserRouter, Route } from "react-router-dom";
	import HomeView from "./components/HomeView.js";
	import AboutView from "./components/AboutView.js";
	class App extends Component {
	  render() {
		return (
		  <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to React!</h1>
			</header>
			<BrowserRouter>
			  <div>
				<Route exact path="/" component={HomeView}/>
				<Route exact path="/about" component={AboutView}/>
			  </div>
			</BrowserRouter>
		  </div>
		);
	  }
	}
	export default App;