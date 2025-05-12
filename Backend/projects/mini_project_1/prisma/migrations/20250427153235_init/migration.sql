-- CreateTable
CREATE TABLE "User" (
    "roll_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "std" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_roll_no_key" ON "User"("roll_no");
