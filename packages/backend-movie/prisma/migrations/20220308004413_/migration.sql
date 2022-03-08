/*
  Warnings:

  - Added the required column `sessionSeatsId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "sessionSeatsId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_sessionSeatsId_fkey" FOREIGN KEY ("sessionSeatsId") REFERENCES "SessionSeats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
