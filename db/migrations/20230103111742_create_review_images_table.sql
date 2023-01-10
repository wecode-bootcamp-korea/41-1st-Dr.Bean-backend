-- migrate:up
CREATE TABLE review_images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  review_img VARCHAR(2000) NOT NULL
);
-- migrate:down
DROP TABLE review_images;
