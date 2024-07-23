import React, { Component } from "react";
	import logo from "./logo.svg";
	import "./App.css";
	import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/about" component={AboutView} />
            </Switch>
          </div>
        </Router>
		  </div>
		);
	  }
	}
	export default App;