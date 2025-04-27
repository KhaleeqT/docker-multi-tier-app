import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')  // <--- THIS fetches from backend
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching:', error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
