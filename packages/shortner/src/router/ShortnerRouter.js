import express from "express";
import ShortnerController from "../controller/ShortnerController.js";

const shotnerController = new ShortnerController();

const router = express.Router();

router.get("/api/shortner", shotnerController.index);
router.get("/api/shortner/:id", shotnerController.getOne);
router.post("/api/shortner", shotnerController.store);
router.put("/api/shortner/:id", shotnerController.update);
router.delete("/api/shortner/:id", shotnerController.remove);

export default router;
