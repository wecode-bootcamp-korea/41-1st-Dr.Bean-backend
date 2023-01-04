-- migrate:up
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  reviews VARCHAR(1000) NULL,
  item_id INT NOT NULL,
  review_image_id INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT reviews_item_id_fkey FOREIGN KEY (item_id) REFERENCES items(id),
  CONSTRAINT reviews_review_image_id_fkey FOREIGN KEY (review_image_id) REFERENCES review_images(id)
);
-- migrate:down
DROP TABLE reviews;
