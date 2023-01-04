-- migrate:up
CREATE TABLE item_images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  item_img_src VARCHAR(1000) NULL
);
-- migrate:down
DROP TABLE item_images;
