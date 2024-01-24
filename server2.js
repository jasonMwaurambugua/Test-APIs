//Test API on #GET & #POST Functions

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const notifications = [
  { id: '1', title: 'New Message', from: 'John Doe', message: 'Hello, how are you?' },
  { id: '2', title: 'Important Notice', from: 'Admin', message: 'Please review the latest updates.' },
  { id: '3', title: 'New Message', from: 'Jane Doe', message: 'Hello, how are you?' },
  { id: '3', title: 'New Message', from: 'John Doe', message: 'I\'m well. I reviewed the latest updates.' },
];

app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

app.post('/api/notifications', (req, res) => {
  const newNotification = req.body;
  notifications.push(newNotification);
  res.status(201).json({ message: 'Notification created successfully', notification: newNotification });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
