"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TicketController_1 = __importDefault(require("../controllers/TicketController"));
const router = (0, express_1.Router)();
const controller = new TicketController_1.default();
router.get('/ticket', controller.index.bind(controller));
router.post('/ticket', controller.store.bind(controller));
router.get('/ticket/:id', controller.getOne.bind(controller));
router.delete('/ticket/:id', controller.remove.bind(controller));
router.put('/ticket/:id', controller.update.bind(controller));
exports.default = router;
