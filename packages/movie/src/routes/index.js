import { Router } from "express";
import MovieRouter from "./MovieRouter.js";
import UserRouter from "./UserRouter.js";
import TicketRouter from "./TicketRouter.js";
import SessionRouter from "./SessionRouter.js";
import SeatRouter from "./SeatRouter.js";

const router = Router();

router.use(MovieRouter);
router.use(UserRouter);
router.use(TicketRouter);
router.use(SessionRouter);
router.use(SeatRouter);

export default router;
