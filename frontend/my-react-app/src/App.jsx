import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');  // State for user input
  const [fetching, setFetching] = useState(false);

  const fetchMessage = () => {
    setFetching(true);
    fetch('http://localhost:5000/')  // Fetch from the backend
      .then(response => response.text())
      .then(data => {
        setMessage(data);
        setFetching(false);
      })
      .catch(error => {
        console.error('Error fetching:', error);
        setFetching(false);
      });
  };

  const sendMessageToBackend = () => {
    // Send the message from input to backend
    fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputMessage }),  // Send input message to backend
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data.response);  // Update message with backend response
        setInputMessage('');  // Clear input after submitting
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div className="app-container">
      <h1>Welcome to My Multi-Tier App</h1>
      <p className="message">{message}</p>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here"
        />
        <button onClick={sendMessageToBackend} disabled={fetching || !inputMessage}>
          Send Message
        </button>
      </div>
      <button onClick={fetchMessage} disabled={fetching}>
        {fetching ? 'Loading...' : 'Fetch New Message'}
      </button>
    </div>
  );
}

export default App;
