import Controller from './Controller.js'

class SessionController extends Controller {
  maxColumns = 5
  maxLines = 5
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z']

  generateSeats() {
    const seats = [];

    for (let z = 0; z < this.maxColumns; z++) {
      for (let y = 0; y < this.maxLines; y++) {
        const column = z + 1;
        const line = this.alphabet[y];

        seats.push({
          column, line, disabled: false,
          state: false,
          name: `${line}${column}`,
          type: "STANDARD"
        })
      }
    }

    return seats;
  }

  constructor() {
    super('session', {
      findMany: {
        include: { SessionSeats: true }
      }
    })
  }

  store(request, response) {
    const { room, sessionDate, price, movieId } = request.body;

    request.body = {
      room,
      price,
      sessionDate,
      SessionSeats: {
        createMany: {
          data: this.generateSeats()
        }
      },
      movie: { connect: { id: movieId } }
    }

    super.store(request, response)
  }
}

export default SessionController
