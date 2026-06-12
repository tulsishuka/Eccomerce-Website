import dotenv from "dotenv";
import { connectDB } from "./config/database.config";
import app from "./app";
 dotenv.config();

const startServer = async () => {
  await connectDB();     

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
};

startServer();

