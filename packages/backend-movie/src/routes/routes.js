import { Router } from "express";

import MovieRouter from "./MovieRouter.js";
import SessionRouter from "./SessionRouter.js";
import UserRouter from "./UserRouter.js";
import TicketRouter from "./TicketRouter.js";
import SeatRouter from "./SeatRouter.js";

const router = Router();

router.use(MovieRouter);
router.use(SessionRouter);
router.use(UserRouter);
router.use(TicketRouter);
router.use(SeatRouter);

export default router;
