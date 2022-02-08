import { Router } from "express";
import ShortnerController from "../controller/ShortnerController.js";

const router = Router();
const shortnerController = new ShortnerController();

router.get("/shortner", shortnerController.index);
router.get("/shortner/:id", shortnerController.getOne);
router.post("/shortner", shortnerController.store);
router.put("/shortner/:id", shortnerController.update);
router.delete("/shortner/:id", shortnerController.remove);

export default router;
