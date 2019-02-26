module.exports = {
  createTableQueries: `
    DROP TABLE IF EXISTS products, product_variations;

    CREATE TABLE "products" (
      "id" SERIAL PRIMARY KEY,
      "unique_id" int,
      "name" varchar(100),
      "category" varchar,
      "manufacturer" varchar,
      "primary_image" varchar(100),
      "review_one_star_count" int,
      "review_two_star_count" int,
      "review_three_star_count" int,
      "review_four_star_count" int,
      "review_five_star_count" int,
      "review_count" int,
      "question_count" int,
      "price" int,
      "total_price" int,
      "stock" int,
      "is_prime" boolean,
      "description" varchar(1000)
    );
    
    CREATE TABLE "product_variations" (
      "id" SERIAL PRIMARY KEY,
      "product_first_id" int REFERENCES products(id),
      "product_second_id" int REFERENCES products(id)
    );
  `,
  createProductQuery: `
    INSERT INTO products(
      unique_id, 
      name, 
      category, 
      manufacturer, 
      primary_image, 
      review_one_star_count, 
      review_two_star_count, 
      review_three_star_count, 
      review_four_star_count,
      review_five_star_count,
      review_count,
      question_count,
      price,
      total_price,
      stock,
      is_prime,
      description
    )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *
  `,
};
