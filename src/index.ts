import express from "express";
import cors from "cors";
import router from "./routers/routes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})

