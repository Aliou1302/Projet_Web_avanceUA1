/*
  Warnings:

  - You are about to drop the column `dateEn` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `dateFr` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `descriptionEn` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `descriptionFr` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `timeEn` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `timeFr` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `titleEn` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `titleFr` on the `Event` table. All the data in the column will be lost.
  - Added the required column `date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Event" ("id", "image") SELECT "id", "image" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
