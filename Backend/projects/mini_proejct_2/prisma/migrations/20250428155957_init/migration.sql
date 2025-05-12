-- CreateTable
CREATE TABLE "Restaurant" (
    "restaurant_id" TEXT NOT NULL,
    "restaurant_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "offer" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("restaurant_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_restaurant_name_key" ON "Restaurant"("restaurant_name");
