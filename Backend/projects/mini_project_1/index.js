const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api Workding");
});

// GET: localhost:3000/students
app.get("/students", async (req, res) => {
  // 1. Data From Frontend

  // 2. DB Logic
  const studentsData = await prisma.user.findMany();

  // 3. Data to Frontend
  res.send(studentsData);
});

// GET: localhost:3000/students
app.get("/students/:roll_no", async (req, res) => {
  // 1. Data from Frontend
  const { roll_no } = req.params;

  // 2. DB Logic
  const studentData = await prisma.User.findUnique({
    where: {
      roll_no: roll_no,
    },
  });

  // 3. Data to Frontend
  res.send(studentData);
});

// POST: localhost:3000/students
app.post("/students", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const newStudentData = await prisma.user.create({
    data: {
      roll_no: data.roll_no,
      name: data.name,
      gender: data.gender,
      std: data.std,
      blood_group: data.blood_group,
    },
  });

  // 3. Data to Frontend
  res.send(newStudentData);
});

// PUT: localhost:3000/students
app.put("/students", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const newUpdatedData = await prisma.user.update({
    where: {
      roll_no: data.roll_no,
    },
    data: {
      name: data.name,
      gender: data.gender,
      std: data.std,
      blood_group: data.blood_group,
    },
  });

  // 3. Data to Frontend
  res.send(newUpdatedData);
});

// DELETE: localhost:3000/students
app.delete("/students", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  await prisma.user.delete({
    where: {
      roll_no: data.roll_no,
    },
  });

  // 3. Data to Frontend
  res.send("Student Data");
});

app.listen(3000);
