import express from "express";
import morgan from "morgan";

import UserRouter from "./routes/UserRouter.js";

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api", UserRouter);

app.listen(3000, () => {
  console.log("Server Running on PORT 3000");
});
