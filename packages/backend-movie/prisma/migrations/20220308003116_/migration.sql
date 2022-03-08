/*
  Warnings:

  - Added the required column `name` to the `SessionSeats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SessionSeats" ADD COLUMN     "name" TEXT NOT NULL;
