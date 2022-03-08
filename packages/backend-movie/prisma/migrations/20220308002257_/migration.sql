/*
  Warnings:

  - Changed the type of `column` on the `SessionSeats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SessionSeats" ALTER COLUMN "line" SET DATA TYPE TEXT,
DROP COLUMN "column",
ADD COLUMN     "column" INTEGER NOT NULL;
