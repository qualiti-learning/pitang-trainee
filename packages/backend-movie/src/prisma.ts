import * as prisma from '@prisma/client'

const prismaClient: any = new prisma.PrismaClient({ log: ['info'] })

export default prismaClient
