const { PrismaClient } = require("@prisma/client");
const express = require("express");
const {z} = require("zod")
const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  // 1. Data from Frontend

  // 2. DB Logic

  // 3. Data to Frontend
  res.send("API Working..");
});

// GET --> Fetch all Restaurant
app.get("/restaurants", async (req, res) => {
  try {
    // 1. Data from Frontend

    // 2. DB Logic
    const restaurantsData = await prisma.restaurant.findMany();

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Fetched All Restaurant", data: restaurantsData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Interal Server Error", error: error });
  }
});

// GET --> Fetch a Restaurant : /restaurants/:id
app.get("/restaurants/:id", async (req, res) => {
  try {
    const FetchRestaurantSchema = z.object({
      id: z.string().min(1),
    });

    // 1. Data from Frontend
    const data = FetchRestaurantSchema.parse(req.params);

    // 2. DB Logic
    const restaurantData = await prisma.restaurant.findUnique({
      where: {
        restaurant_id: data.id,
      },
    });

    // 3. Data to Frontend
    res.status(200).json({ message: "Fetched Data", data: restaurantData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Interal Server Error", error: error });
  }
});

// POST --> Create a Restaurant --> /restaurants
app.post("/restaurants", async (req, res) => {
  try {
    const CreateRestaurantSchema = z.object({
      restaurant_name: z.string().cuid(),
      location: z.string().url(),
      image_url: z.string().url(),
      offer: z.string().min(1),
    });

    // 1. Data from Frontend
    const data = CreateRestaurantSchema.parse(req.body);

    // 2. DB Logic
    const newRestauramt = await prisma.restaurant.create({
      data: {
        restaurant_name: data.restaurant_name,
        location: data.location,
        image_url: data.image_url,
        offer: data.offer,
      },
    });

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Created New Restaurant", data: newRestauramt });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Interal Server Error", error: error });
  }
});

// PUT --> update a Restaurant --> /restaurants
app.put("/restaurants", async (req, res) => {
  try {
    const UpdateRestaurantSchema = z.object({
      restaurant_name: z.string().cuid(),
      location: z.string().url(),
      image_url: z.string().url(),
      offer: z.string().min(1),
    });


    // 1. Data from Frontend
    const data = UpdateRestaurantSchema.parse(req.body);

    // 2. DB Logic
    const newUpdatedRestaurantsData = await prisma.restaurant.update({
      where: {
        restaurant_id: data.restaurant_id,
      },
      data: {
        restaurant_name: data.restaurant_name,
        location: data.location,
        image_url: data.image_url,
        offer: data.offer,
      },
    });

    // 3. Data to Frontend
    res.status(200).json({
      message: "Update Restaurant Data",
      data: newUpdatedRestaurantsData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Interal Server Error", error: error });
  }
});

// DEL --> Delete a Restaurant --> localhost:3000/restaurants/:id
app.delete("/restaurants", async (req, res) => {
  try {
    const DeleteRestaurantSchema = z.object({
      restaurant_id: z.string().cuid()
    })

    // 1. Data from Frontend
    const { restaurant_id } = DeleteRestaurantSchema.parse(req.body);

    // 2. DB Logic
    await prisma.restaurant.delete({
      where: {
        restaurant_id: restaurant_id,
      },
    });

    // 3. Data to Frontend
    res.status(200).json({ message: "Delete the Restaurant Data" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Interal Server Error", error: error });
  }
});

app.listen(3000);
