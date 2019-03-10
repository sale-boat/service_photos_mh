
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  unique_id int,
  name varchar(100),
  slug varchar(125),
  category varchar,
  manufacturer varchar,
  primary_image varchar(100),
  secondary_images varchar(100)[],
  review_one_star_count int,
  review_two_star_count int,
  review_three_star_count int,
  review_four_star_count int,
  review_five_star_count int,
  review_count int,
  question_count int,
  price int,
  total_price int,
  stock int,
  is_prime boolean,
  description varchar(500)
);
