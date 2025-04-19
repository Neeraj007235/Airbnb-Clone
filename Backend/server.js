import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());    


app.post("/api/price", (req, res) => {
    const { guests } = req.body;
  
    let basePrice = 26000;
  
    const { adults, children, infants, pets } = guests;
  
    // i have consider the base price as 26000 and added the price of each guest type
    basePrice += (adults - 1) * 2000;
    basePrice += children * 1000;
    basePrice += infants * 500;
    basePrice += pets * 800;
  
    res.json({ pricePerNight: basePrice });
  });
  

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});