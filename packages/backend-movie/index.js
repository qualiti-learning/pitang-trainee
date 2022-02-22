const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

(async () => {
  const sessions = await prisma.session.findMany({ include: { movie: true } })

  console.log(sessions)

  //   const session = await prisma.session.create({
  //     data: {
  //       sessionDate: new Date(),
  //       room: 'IMAX',
  //       movie: { connect: { id: 'd92ec9a8-de41-4bfe-945a-3f21213c806f' } }
  //     }
  //   })

  //   console.log(session)

  //   const movies = await prisma.movie.createMany({
  //     data: [{
  //       name: 'Interestelar',
  //       description: 'SCI-FI',
  //       duration: 180,
  //       classification: 'PARENT_GUIDANCE_SUGGESTED'
  //     },
  //     {
  //       name: 'Batman Begins',
  //       description: 'Batman...',
  //       duration: 180,
  //       classification: 'RESTRICTED'
  //     },
  //     {
  //       name: 'Batman Dark Night',
  //       description: 'Batman...',
  //       duration: 150,
  //       classification: 'RESTRICTED'
  //     }]
  //   })

//   console.log(movies.count)
})()

// createUser("Keven", "keven.santos.sz@gmail.com", new Date())
