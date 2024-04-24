/*
  Warnings:

  - You are about to drop the column `class` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `CharacterStats` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clas` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "class",
ADD COLUMN     "clas" TEXT NOT NULL;

-- DropTable
DROP TABLE "CharacterStats";
