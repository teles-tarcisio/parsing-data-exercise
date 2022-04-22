import cors from "cors";
import express, { json } from "express";
import sponsoredRouter from './routers/sponsoredRouter.js';

const app = express();
app.use(json());
app.use(cors());
app.use(sponsoredRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
