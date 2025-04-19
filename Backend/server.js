import express from 'express';
import cors from 'cors';
import path from "path";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); 

const __dirname = path.resolve();


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

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
  console.log(`Server Running On Port ${process.env.PORT}`)
});