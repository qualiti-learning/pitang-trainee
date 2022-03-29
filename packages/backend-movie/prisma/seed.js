import prismaClient from "../src/prisma.js";

const prisma = prismaClient;

(async () => {
  await prisma.movie.createMany({
    data: [
      {
        name: "Interstelar",
        description: "SCI-FI",
        duration: 180,
        classification: "RESTRICTED",
      },
      {
        name: "Batman Begins",
        description: "Batman...",
        duration: 180,
        classification: "RESTRICTED",
      },
      {
        name: "Batman Dark Knight",
        description: "Batman...",
        duration: 180,
        classification: "RESTRICTED",
      },
    ],
  });

  const movie = await prisma.movie.findFirst();

  await prisma.session.create({
    data: {
      sessionDate: new Date(),
      room: "IMAX",
      movie: {
        connect: { id: movie.id },
      },
      price: 3000,
    },
  });

  const session = await prisma.session.findFirst();

  await prisma.sessionSeats.create({
    data: {
      name: "A1",
      line: "A",
      column: 1,
      sessionId: session.id,
    },
  });

  const sessionSeat = await prisma.sessionSeats.findFirst();

  await prisma.user.create({
    data: {
      name: "Keven Leone",
      email: "keven.leone@example.com",
      password: "123456",
      birthDate: new Date("1996-02-19"),
      role: "USER",
    },
  });

  const user = await prisma.user.findFirst();

  await prisma.ticket.create({
    data: {
      sessionId: session.id,
      userId: user.id,
      sessionSeatsId: sessionSeat.id,
    },
  });
})();
