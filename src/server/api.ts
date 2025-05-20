
import express from 'express';
import cors from 'cors';
import { saveVisitorData, saveContactFormData } from './db';

const app = express();
app.use(cors());
app.use(express.json());

// Route for saving visitor data
app.post('/api/visitors', async (req, res) => {
  try {
    const visitorData = req.body;
    const result = await saveVisitorData(visitorData);
    res.status(201).json({ message: 'Visitor data saved successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error saving visitor data:', error);
    res.status(500).json({ message: 'Error saving visitor data' });
  }
});

// Route for saving contact form data
app.post('/api/contacts', async (req, res) => {
  try {
    const contactData = req.body;
    const result = await saveContactFormData(contactData);
    res.status(201).json({ message: 'Contact form data saved successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ message: 'Error saving contact form data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
