const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();

const prisma = new PrismaClient();

// API : GET - localhost:3000/products
app.get("/products", async (req, res) => {
  try {
    // Step 1 : Data from Frontend

    // Step 2 : DB Logic
    const productsData = await prisma.product.findMany();

    // Step 3 : Data to Frontend
    res
      .status(200)
      .json({ message: "Fetch Products Data", data: productsData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Interal Server Error" });
  }
});

// API - GET - localhost:3000/products/product_id
app.get("/products/:product_id", async (req, res) => {
  try {
    // Step 1 : Data from Frontend
    const { product_id } = req.params;

    // Step 2 : DB Logic
    const productData = await prisma.product.findUnique({
      where: {
        product_id: product_id,
      },
    });

    // Step 3 : Data to Frontend
    res.status(200).json({ message: "Products Data Retived", data: productData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Interal Server Error" });
  }
});

app.listen(3000);
