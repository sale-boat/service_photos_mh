
COPY products(
  unique_id, 
  name,
  slug,
  category,
  manufacturer, 
  primary_image, 
  secondary_images,
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
) FROM '/home/ubuntu/service_photos_mh/dataGeneration/output.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX ON products (unique_id);
CREATE INDEX ON products (slug);
