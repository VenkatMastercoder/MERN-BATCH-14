-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" TEXT NOT NULL,
    "product_discount_percentage" TEXT NOT NULL,
    "product_rating" TEXT NOT NULL,
    "product_thumbnail_url" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "product_tags" TEXT[],
    "product_images" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");
