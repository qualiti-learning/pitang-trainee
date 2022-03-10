import prisma from '@prisma/client'

const prismaClient = new prisma.PrismaClient({ log: ['info'] })

export default prismaClient
