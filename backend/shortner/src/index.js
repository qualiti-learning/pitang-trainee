import express from "express";
import morgan from "morgan";

import UserRouter from "./router/UserRouter.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(UserRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
