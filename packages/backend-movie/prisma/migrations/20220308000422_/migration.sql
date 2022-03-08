-- CreateEnum
CREATE TYPE "SeatType" AS ENUM ('DOUBLESEAT', 'STANDARD', 'WHEELCHAIR');

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "sessionDate" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "SessionSeats" (
    "id" TEXT NOT NULL,
    "line" INTEGER NOT NULL,
    "column" TEXT NOT NULL,
    "type" "SeatType" NOT NULL DEFAULT E'STANDARD',
    "state" BOOLEAN NOT NULL DEFAULT false,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "sessionId" TEXT,

    CONSTRAINT "SessionSeats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SessionSeats" ADD CONSTRAINT "SessionSeats_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE SET NULL ON UPDATE CASCADE;
