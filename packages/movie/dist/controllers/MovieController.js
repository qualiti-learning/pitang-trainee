"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma = __importStar(require("@prisma/client"));
const joi_1 = __importDefault(require("joi"));
const Controller_1 = __importDefault(require("./Controller"));
const { ParentalGuidance } = prisma;
const schema = joi_1.default.object({
    parental_guidance: joi_1.default.string().required().valid(...Object.values(ParentalGuidance)),
    languages: joi_1.default.array().items(joi_1.default.string()),
    director: joi_1.default.string().required().min(3).max(50),
    name: joi_1.default.string().required(),
    rating: joi_1.default.number().max(10),
    duration: joi_1.default.number().integer().positive().max(500),
    thumbnail: joi_1.default.string().allow(''),
    description: joi_1.default.string().required().max(10000)
});
class MovieController extends Controller_1.default {
    constructor() {
        super({ entity: 'movie', validationSchema: schema });
    }
}
exports.default = MovieController;
