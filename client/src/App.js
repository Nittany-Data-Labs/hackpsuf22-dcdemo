import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [person, setPerson] = useState([]);

  useEffect(() => { 
    fetch('/api/person')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data) {
        setPerson(data);
      }
  })
  .catch(error => console.log(error));
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> { person.name }'s age is { person.age } </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
