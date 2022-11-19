import express from "express";
import { addRouts } from "./src/route/router.js";

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}...`);
});

addRouts(app);
