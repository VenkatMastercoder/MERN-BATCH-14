// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.restaurant.createMany({
    data: [
      {
        restaurant_name: "Spice Villa",
        location: "New York, NY",
        image_url: "https://example.com/images/spice-villa.jpg",
        offer: "20% off on first order"
      },
      {
        restaurant_name: "The Burger Joint",
        location: "Los Angeles, CA",
        image_url: "https://example.com/images/burger-joint.jpg",
        offer: "Buy 1 Get 1 Free"
      },
      {
        restaurant_name: "Sushi Express",
        location: "San Francisco, CA",
        image_url: "https://example.com/images/sushi-express.jpg",
        offer: "Free Miso Soup"
      },
      {
        restaurant_name: "Pasta Palace",
        location: "Chicago, IL",
        image_url: "https://example.com/images/pasta-palace.jpg",
        offer: "15% off orders over $30"
      },
      {
        restaurant_name: "Taco Tower",
        location: "Austin, TX",
        image_url: "https://example.com/images/taco-tower.jpg",
        offer: "Free Drink with Combo"
      },
      {
        restaurant_name: "BBQ Haven",
        location: "Memphis, TN",
        image_url: "https://example.com/images/bbq-haven.jpg",
        offer: "10% off for students"
      },
      {
        restaurant_name: "Green Bowl",
        location: "Portland, OR",
        image_url: "https://example.com/images/green-bowl.jpg",
        offer: "Free Dessert"
      },
      {
        restaurant_name: "Curry Kingdom",
        location: "Seattle, WA",
        image_url: "https://example.com/images/curry-kingdom.jpg",
        offer: "Buy 2 Get 1 Free"
      },
      {
        restaurant_name: "Deli Dine",
        location: "Boston, MA",
        image_url: "https://example.com/images/deli-dine.jpg",
        offer: "Lunch Special $5.99"
      },
      {
        restaurant_name: "Pizza Planet",
        location: "Miami, FL",
        image_url: "https://example.com/images/pizza-planet.jpg",
        offer: "Free Garlic Bread"
      }
    ]
  })
}

main()
  .then(() => {
    console.log("✅ Seed data created.")
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
