import express from "express";
import cors from "cors";
import { addRouts } from "./src/route/router.js";

const app = express();
const PORT = 4000;
// app.use(cors);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
addRouts(app);
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}...`);
});
