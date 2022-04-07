import { Router } from "express";
import SeatController from "../controllers/SeatController.js";

const seatController = new SeatController();

const router = Router();

router.get("/seat", seatController.index.bind(seatController));

export default router;
