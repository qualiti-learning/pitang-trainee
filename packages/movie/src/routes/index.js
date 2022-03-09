import { Router } from "express";
import MovieRouter from "./MovieRouter.js";
import UserRouter from "./UserRouter.js";

const router = Router();

router.use(MovieRouter);
router.use(UserRouter);

export default router;
