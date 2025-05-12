-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "ProofType" AS ENUM ('AADHARCARD', 'PANCARD');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CASH', 'NEFT', 'BANKTRANFER');

-- CreateTable
CREATE TABLE "Student" (
    "roll_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "dob" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StudentProof" (
    "student_proof_id" TEXT NOT NULL,
    "proof_type" "ProofType" NOT NULL,
    "proof_link" TEXT NOT NULL,
    "roll_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StudentFees" (
    "student_fees_id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "payment_mode" "PaymentType" NOT NULL,
    "payment_amount" TEXT NOT NULL,
    "roll_no" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_roll_no_key" ON "Student"("roll_no");

-- CreateIndex
CREATE UNIQUE INDEX "StudentProof_student_proof_id_key" ON "StudentProof"("student_proof_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudentProof_roll_no_key" ON "StudentProof"("roll_no");

-- CreateIndex
CREATE UNIQUE INDEX "StudentFees_student_fees_id_key" ON "StudentFees"("student_fees_id");

-- AddForeignKey
ALTER TABLE "StudentProof" ADD CONSTRAINT "StudentProof_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Student"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentFees" ADD CONSTRAINT "StudentFees_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Student"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;
