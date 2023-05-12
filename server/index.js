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
//   "access_token": "BQDkXAtyvrROpkT5zyp265t6S5FwwaTAwi_xmb18czb9c4Nv3OVIOB6GvjT552iuKSqYHbbMgMziIASTCx-iv8ZuYa5r0gf6h0KG_ia-58gQAngPNsiV",
//   "token_type": "Bearer",
//   "expires_in": 3600
// }