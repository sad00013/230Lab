// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Card from './Card';

function App() {
  return (
    <div>
    <NavBar />
    <div className="App">
      <h1>CS 230L</h1>
      <h2>Section 002</h2> 
      <p>WVU ID: 800355613</p>
      <p>Hi I am Simon Dalton</p>
    </div>
    <Card />
    </div>
  );
}

export default App;
