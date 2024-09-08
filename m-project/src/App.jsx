import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">The Screen</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
      </nav>
      <h2>Olá</h2>
    </div>
  );
}

export default App;
