// Test API on #GET #POST #PUT and #DELETE Functions 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const notifications = [
  { id: '1', title: 'New Message', from: 'John Doe', message: 'Hello, how are you?' },
  { id: '2', title: 'Important Notice', from: 'Admin', message: 'Please review the latest updates.' },
  { id: '3', title: 'New Message', from: 'Jane Doe', message: 'Hello, how are you?' },
  { id: '4', title: 'New Message', from: 'John Doe', message: 'I\'m well. I reviewed the latest updates.' },
  { id: '5', title: 'New message', from: 'Jane Doe', message: 'Thank you.' },
  { id: '7', title: 'New message', from: 'John Doe', message: 'You\'re welcome.' },
  { id: '9', title: 'New message', from: 'Jane Doe', message: 'Hello John.Did the admin approve our feedback on latest updates?' },
];

// GET all notifications
app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

// POST a new notification
app.post('/api/notifications', (req, res) => {
  const newNotification = req.body;
  notifications.push(newNotification);
  res.status(201).json({ message: 'Notification created successfully', notification: newNotification });
});

// PUT (Update) a notification by ID
app.put('/api/notifications/:id', (req, res) => {
  const { id } = req.params;
  const updatedNotification = req.body;

  const index = notifications.findIndex(notification => notification.id === id);

  if (index !== -1) {
    notifications[index] = { ...notifications[index], ...updatedNotification };
    res.json({ message: 'Notification updated successfully', notification: notifications[index] });
  } else {
    res.status(404).json({ error: 'Notification not found' });
  }
});

// DELETE a notification by ID
app.delete('/api/notifications/:id', (req, res) => {
  const { id } = req.params;

  const index = notifications.findIndex(notification => notification.id === id);

  if (index !== -1) {
    const deletedNotification = notifications.splice(index, 1);
    res.json({ message: 'Notification deleted successfully', notification: deletedNotification[0] });
  } else {
    res.status(404).json({ error: 'Notification not found' });
  }
});

// Handle undefined routes with a 404 error
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
