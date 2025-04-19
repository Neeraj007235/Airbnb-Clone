import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Port config
const PORT = process.env.PORT || 4000;

// Price calculation API
app.post('/api/price', (req, res) => {
  try {
    const { guests } = req.body;

    if (!guests || typeof guests !== 'object') {
      return res.status(400).json({ error: 'Invalid or missing guest data.' });
    }

    let basePrice = 26000;
    const { adults = 1, children = 0, infants = 0, pets = 0 } = guests;

    basePrice += (adults - 1) * 2000;
    basePrice += children * 1000;
    basePrice += infants * 500;
    basePrice += pets * 800;

    res.json({ pricePerNight: basePrice });
  } catch (error) {
    console.error('Error calculating price:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

//  Safe static file serving in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../Frontend/dist');

  if (fs.existsSync(distPath)) {
    console.log('Serving frontend from:', distPath);
    app.use(express.static(distPath));

    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    console.warn('⚠️ Frontend dist folder not found. Skipping static serving.');
  }
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
