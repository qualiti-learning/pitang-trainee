"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./Controller"));
class UserController extends Controller_1.default {
    constructor() {
        super({ entity: 'user' });
    }
}
exports.default = UserController;
