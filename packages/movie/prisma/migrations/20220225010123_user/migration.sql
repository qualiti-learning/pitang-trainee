-- CreateEnum
CREATE TYPE "Region" AS ENUM ('SUL', 'SULDESTE', 'NORTE', 'NORDESTE', 'CENTROOESTE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "email" TEXT,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "region" "Region" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
