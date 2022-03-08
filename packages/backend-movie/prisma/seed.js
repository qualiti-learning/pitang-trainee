import prismaClient from "../src/prisma";
import { hash } from "bcrypt";

const prisma = prismaClient;

(async () => {
    await prisma.movie.createMany({
        data: [
            {
                name: "Interstelar",
                description: "SCI-FI",
                duration: 180,
                classification: "PARENT_GUIDANCE_SUGGESTED",
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
            state: true,
            sessionId: session.id,
        },
    });

    const sessionSeat = await prisma.sessionSeat.findFirst();

    await prisma.user.create({
        data: {
            name: "Natalia",
            email: "nat@nat.nat",
            password: await hash("123456", 10),
            birthDate: new Date("1995-02-03"),
            role: "ADMINISTRATOR",
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