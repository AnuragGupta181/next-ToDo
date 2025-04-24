import { PrismaClient } from "@prisma/client/extension";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingelton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = global as unknown as { prisma: PrismaClientSingelton | undefined };

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
