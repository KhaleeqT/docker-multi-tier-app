const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());  // Middleware to parse JSON requests

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/send', (req, res) => {
  const { message } = req.body;  // Get the message from the frontend
  console.log('Message received from frontend:', message);
  // Respond with a modified message or custom response
  res.json({ response: `Message received: ${message}` });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
