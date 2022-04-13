import { Router } from "express";
import SeatController from "../controllers/SeatController.js";

const router = Router();

const controller = new SeatController();

router.get("/seat", controller.index.bind(controller));

export default router;
