//--- depencies ---
import dotenv from "dotenv";
import express from "express";
const app = express();
import cors from "cors";
dotenv.config();
app.use(express.json());
app.use(cors());
const PORT =  8080;






  //--- setting port listener ---
  app.listen(PORT, (error) => {
    if (error) {
      console.error("error");
    } else {
      console.log(`server running at ${PORT}`);
    }
  });




// {
//   "access_token": "BQB_7HjDK6s1eU9V1saHpadnwHKFgDilThXRSnCb8wNJDPm9x8NkEgTV5UTc8QlUbI9aiL4RBJ-4B0kDhZvhQOsDbBCLTWztsQv7r7FjAxfY0XEmn9zK",
//   "token_type": "Bearer",
//   "expires_in": 3600
// }