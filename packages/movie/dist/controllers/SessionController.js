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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma = __importStar(require("@prisma/client"));
const joi_1 = __importDefault(require("joi"));
const Controller_1 = __importDefault(require("./Controller"));
const { Room, SeatStatus, SeatType } = prisma;
const schema = joi_1.default.object({
    sessionDate: joi_1.default.date().required(),
    room: joi_1.default.string().required().valid(...Object.values(Room)),
    caption: joi_1.default.boolean().required(),
    movie: joi_1.default.object({
        connect: joi_1.default.object({
            id: joi_1.default.string().required()
        })
    }),
    SessionSeats: joi_1.default.any()
});
class SessionController extends Controller_1.default {
    constructor() {
        super({
            entity: 'session',
            validationSchema: schema,
            prismaOptions: {
                include: {
                    movie: true, Ticket: true, SessionSeats: true
                }
            }
        });
        this.excludeColumns = [
            { line: 'A', columns: [1, 3] },
            { line: 'B', columns: [3] }
        ];
        this.maxOfColumns = 5;
        this.maxOfRows = 5;
    }
    generateSeats() {
        const seats = [];
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (let x = 0; x < this.maxOfRows; x++) {
            for (let y = 0; y < this.maxOfColumns; y++) {
                const column = y + 1;
                const line = alphabet[x];
                const isExcluded = this.excludeColumns.find((excludeColumn) => excludeColumn.columns.includes(column) && excludeColumn.line === line);
                if (isExcluded) {
                    continue;
                }
                seats.push({
                    line,
                    column,
                    type: SeatType.STANDARD,
                    status: SeatStatus.AVAILABLE
                });
            }
        }
        return seats;
    }
    store(request, response) {
        const _super = Object.create(null, {
            store: { get: () => super.store }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const movieId = request.body.movieId;
            delete request.body.movieId;
            request.body = Object.assign(Object.assign({}, request.body), { movie: {
                    connect: {
                        id: movieId
                    }
                }, SessionSeats: {
                    createMany: { data: this.generateSeats() }
                } });
            _super.store.call(this, request, response);
        });
    }
}
exports.default = SessionController;
