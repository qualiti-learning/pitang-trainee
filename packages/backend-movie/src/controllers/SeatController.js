import Controller from "./Controller.js";

class SeatController extends Controller {
  constructor() {
    super("sessionSeats");
  }

  async index(request, response) {
    const { sessionId } = request.query;

    if (sessionId) {
      const seats = await this.prismaClient.sessionSeats.findMany({
        where: { sessionId },
      });

      return response.json(seats);
    }

    response.json([]);
  }
}

export default SeatController;
