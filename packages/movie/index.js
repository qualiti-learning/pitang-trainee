import prisma from "@prisma/client";

const prismaClient = new prisma.PrismaClient();

(async () => {
  try {
    await prismaClient.user.create({
      data: {
        phone: "99989999",
        name: "Leone",
        email: "keven.leone@me.com",
        birthDate: new Date(),
        country: "Brasil",
        region: "NORTE",
      },
    });
  } catch (error) {
    console.log(error);
  }
})();
