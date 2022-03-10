/*
  Warnings:

  - The values [XD] on the enum `SessionRoom` will be removed. If these variants are still used in the database, this will fail.
  - The `state` column on the `SessionSeats` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SeatStatus" AS ENUM ('AVAILABLE', 'BLOCKED', 'BUSY', 'SELECTED');

-- AlterEnum
BEGIN;
CREATE TYPE "SessionRoom_new" AS ENUM ('COMMON', 'DLUX', 'IMAX');
ALTER TABLE "Session" ALTER COLUMN "room" DROP DEFAULT;
ALTER TABLE "Session" ALTER COLUMN "room" TYPE "SessionRoom_new" USING ("room"::text::"SessionRoom_new");
ALTER TYPE "SessionRoom" RENAME TO "SessionRoom_old";
ALTER TYPE "SessionRoom_new" RENAME TO "SessionRoom";
DROP TYPE "SessionRoom_old";
ALTER TABLE "Session" ALTER COLUMN "room" SET DEFAULT 'COMMON';
COMMIT;

-- AlterTable
ALTER TABLE "SessionSeats" DROP COLUMN "state",
ADD COLUMN     "state" "SeatStatus" NOT NULL DEFAULT E'AVAILABLE';
