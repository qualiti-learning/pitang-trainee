"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SessionController_1 = __importDefault(require("../controllers/SessionController"));
const router = (0, express_1.Router)();
const controller = new SessionController_1.default();
router.get('/session', controller.index.bind(controller));
router.post('/session', controller.store.bind(controller));
router.get('/session/:id', controller.getOne.bind(controller));
router.delete('/session/:id', controller.remove.bind(controller));
router.put('/session/:id', controller.update.bind(controller));
exports.default = router;
