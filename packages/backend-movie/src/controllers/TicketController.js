import Joi from "joi";
import Controller from "./Controller.js";
import Prisma from "@prisma/client";

const { TicketCategory } = Prisma;

class TicketController extends Controller {
  constructor() {
    super("ticket", {
      findMany: {
        include: {
          session: { include: { movie: true } },
          seat: true,
          user: true,
        },
      },
    });
  }

  async store(request, response) {
    const { category, seatId, sessionId } = request.body;

    const schema = Joi.object({
      seatId: Joi.string().required(),
      sessionId: Joi.string().required(),
      category: Joi.string().valid(...Object.values(TicketCategory)),
    });

    const validate = schema.validate({ category, seatId, sessionId });

    if (validate.error) {
      return response.status(400).json(validate.error);
    }

    const userId = "4a0ab7d0-c69b-4d96-93fd-96da74a1b9bd";

    const ticket = await this.prismaClient.ticket.create({
      data: {
        category,
        paymentStatus: true,
        user: { connect: { id: userId } },
        session: { connect: { id: sessionId } },
        seat: { connect: { id: seatId } },
      },
    });

    await this.prismaClient.sessionSeats.update({
      data: { state: "BLOCKED" },
      where: { id: seatId },
    });

    response.json(ticket);
  }
}

export default TicketController;
