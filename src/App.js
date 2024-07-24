import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
/*import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';*/
import './App.css';

/*
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
export default App;*/
function MyButton() {
	return (
	  <button>
		I'm a button
	  </button>
	);
  }
  
  export default function MyApp() {
	return (
	  <div>
		<h1>Welcome to my app</h1>
		<MyButton />
	  </div>
	);
  }
