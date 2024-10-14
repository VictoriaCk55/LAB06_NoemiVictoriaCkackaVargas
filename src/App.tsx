import { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState(5);

  const handleClick = () => {
    setValue((prevValue) => prevValue + 50);
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={handleClick}> {value}
        </button>
      </div>
    </div>
  );
}

export default App;

