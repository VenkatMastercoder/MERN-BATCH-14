import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      product_title: 'Wireless Mouse',
      product_description: 'Ergonomic wireless mouse with USB receiver.',
      product_price: '19.99',
      product_discount_percentage: '10',
      product_rating: '4.2',
      product_thumbnail_url: 'https://example.com/mouse.jpg',
      brand: 'LogiTech',
      product_tags: ['electronics', 'accessories'],
      product_images: [
        'https://example.com/mouse1.jpg',
        'https://example.com/mouse2.jpg',
      ],
    },
    {
      product_title: 'Bluetooth Speaker',
      product_description: 'Portable speaker with rich bass and clear sound.',
      product_price: '49.99',
      product_discount_percentage: '15',
      product_rating: '4.5',
      product_thumbnail_url: 'https://example.com/speaker.jpg',
      brand: 'SoundMax',
      product_tags: ['electronics', 'audio'],
      product_images: [
        'https://example.com/speaker1.jpg',
        'https://example.com/speaker2.jpg',
      ],
    },
    {
      product_title: 'Running Shoes',
      product_description: 'Comfortable running shoes for everyday use.',
      product_price: '89.99',
      product_discount_percentage: '20',
      product_rating: '4.7',
      product_thumbnail_url: 'https://example.com/shoes.jpg',
      brand: 'Sporty',
      product_tags: ['footwear', 'sports'],
      product_images: [
        'https://example.com/shoes1.jpg',
        'https://example.com/shoes2.jpg',
      ],
    },
    {
      product_title: 'Smart Watch',
      product_description: 'Feature-rich smartwatch with fitness tracking.',
      product_price: '129.99',
      product_discount_percentage: '18',
      product_rating: '4.3',
      product_thumbnail_url: 'https://example.com/watch.jpg',
      brand: 'TechTime',
      product_tags: ['wearables', 'gadgets'],
      product_images: [
        'https://example.com/watch1.jpg',
        'https://example.com/watch2.jpg',
      ],
    },
    {
      product_title: 'Gaming Keyboard',
      product_description: 'RGB mechanical keyboard with customizable keys.',
      product_price: '69.99',
      product_discount_percentage: '12',
      product_rating: '4.6',
      product_thumbnail_url: 'https://example.com/keyboard.jpg',
      brand: 'KeyPro',
      product_tags: ['gaming', 'accessories'],
      product_images: [
        'https://example.com/keyboard1.jpg',
        'https://example.com/keyboard2.jpg',
      ],
    },
    {
      product_title: 'LED Monitor',
      product_description: '27-inch full HD monitor with vibrant display.',
      product_price: '199.99',
      product_discount_percentage: '10',
      product_rating: '4.4',
      product_thumbnail_url: 'https://example.com/monitor.jpg',
      brand: 'ViewMax',
      product_tags: ['electronics', 'display'],
      product_images: [
        'https://example.com/monitor1.jpg',
        'https://example.com/monitor2.jpg',
      ],
    },
    {
      product_title: 'Noise Cancelling Headphones',
      product_description: 'Over-ear headphones with active noise cancellation.',
      product_price: '149.99',
      product_discount_percentage: '17',
      product_rating: '4.8',
      product_thumbnail_url: 'https://example.com/headphones.jpg',
      brand: 'QuietSound',
      product_tags: ['audio', 'gadgets'],
      product_images: [
        'https://example.com/headphones1.jpg',
        'https://example.com/headphones2.jpg',
      ],
    },
    {
      product_title: 'Fitness Tracker',
      product_description: 'Track your steps, heart rate, and sleep patterns.',
      product_price: '39.99',
      product_discount_percentage: '22',
      product_rating: '4.1',
      product_thumbnail_url: 'https://example.com/tracker.jpg',
      brand: 'FitLife',
      product_tags: ['fitness', 'wearables'],
      product_images: [
        'https://example.com/tracker1.jpg',
        'https://example.com/tracker2.jpg',
      ],
    },
    {
      product_title: 'Laptop Backpack',
      product_description: 'Water-resistant backpack with padded laptop sleeve.',
      product_price: '59.99',
      product_discount_percentage: '14',
      product_rating: '4.5',
      product_thumbnail_url: 'https://example.com/backpack.jpg',
      brand: 'UrbanGear',
      product_tags: ['bags', 'laptop'],
      product_images: [
        'https://example.com/backpack1.jpg',
        'https://example.com/backpack2.jpg',
      ],
    },
    {
      product_title: 'Electric Toothbrush',
      product_description: 'Rechargeable toothbrush with multiple modes.',
      product_price: '29.99',
      product_discount_percentage: '25',
      product_rating: '4.6',
      product_thumbnail_url: 'https://example.com/toothbrush.jpg',
      brand: 'SmilePro',
      product_tags: ['personal care', 'electronics'],
      product_images: [
        'https://example.com/toothbrush1.jpg',
        'https://example.com/toothbrush2.jpg',
      ],
    },
  ];

  await prisma.product.createMany({
    data: products,
  });

  console.log('Seeded 10 products successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
