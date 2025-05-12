const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");
const morgan = require("morgan");

const app = express();

const prisma = new PrismaClient();

const middleware1 = (req, res, next) => {
  console.log("middleware1");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("middleware2");
  next();
};

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "hh-room-temp", function (err, decoded) {
      if (!err) {
        req.user = {
          role: decoded.role,
        };
        next();
      } else {
        res.send("Invaild Token");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Interal Server Error");
  }
};

const RBAC = (ROLE) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (ROLE === role) {
      next();
    } else {
      res.send("No Access for this ROLE");
    }
  };
};

app.use(morgan("dev"));

app.use(express.json());
// app.use(middleware1);
// app.use(middleware2);

app.get("/", (req, res) => {
  res.send("Auth APIs Working");
});

// Register API - POST : /register ==> Adding New User
app.post("/register", async (req, res) => {
  try {
    // 1. Data from the Frontend
    const data = req.body;

    // 2. DB Logic
    const isUserExists = await prisma.user.findUnique({
      where: {
        email_id: data.email_id,
      },
    });

    if (isUserExists) {
      res.status(401).json({ message: "User Email Adready Exists" });
    } else {
      const hasedpassword = await bcrypt.hash(data.password, 10);

      // Register the User
      const newUser = await prisma.user.create({
        data: {
          email_id: data.email_id,
          password: hasedpassword,
          phone_number: data.phone_number,
        },
      });

      const { password, ...datas } = newUser;

      res
        .status(200)
        .json({ message: "user Register Successfully", data: datas });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Interal Server Error" });
  }
});

// Login API - POST : /login ===> Login a New User
app.post("/login", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const isUserExists = await prisma.user.findUnique({
    where: {
      email_id: data.email_id,
    },
  });

  if (isUserExists) {
    // Check the Password
    bcrypt.compare(
      data.password,
      isUserExists.password,
      function (err, result) {
        if (result) {
          const payload = {
            user_id: isUserExists.user_id,
            email_id: isUserExists.email_id,
            role: isUserExists.role,
          };
          const temp_key = jwt.sign(payload, "hh-room-temp");
          const main_key = jwt.sign(payload, "hh-room-main");

          // Exclude password from response
          const { password, ...userData } = isUserExists;

          res.status(200).json({
            message: "Login successful",
            data: {
              ...userData,
              token: { temp_key, main_key },
            },
          });
        } else {
          res.status(404).json({ message: "Password is Not Correct" });
        }
      }
    );
  } else {
    res
      .status(404)
      .json({ message: "User Email Does Exists. Go and Register First" });
  }
});

// Refresh API - POST : /refresh ===> Refresh The Token
app.post("/refresh", (req, res) => {
  // 1. Data from Frotnend
  const data = req.body;

  // 2. DB Logic
  jwt.verify(data.main_key, "hh-room", (err, decoded) => {
    if (!err) {
      const temp_key = jwt.sign(
        {
          user_id: decoded.user_id,
          email_id: decoded.email_id,
          role: decoded.role,
        },
        "hh-room-temp"
      );
      res.status(200).json({ message: "Token Generated", data: temp_key });
    } else {
      res.status(404).json({ message: "Invaild Token" });
    }
  });
});

// Fetch all User API - Public
app.get("/user", async (req, res) => {
  // 1. Data from Frontend

  // 2. DB Logic
  const user = await prisma.user.findMany();

  // 3. Data to Frotnend
  res.send(user);
});

// Fetch a User By user_id API - Private
app.get("/user/:user_id", authMiddleware, RBAC("USER"), async (req, res) => {
  // 1. Data from Frontend
  const { user_id } = req.params;

  // 2. DB Logic
  const userData = await prisma.user.findUnique({
    where: {
      user_id: user_id,
    },
  });

  // 3. Data to Frontend
  res.send(userData);
});

app.listen(3000);
