-- migrate:up
CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL, 
  description VARCHAR(1000) NULL,
  price INT NOT NULL,
  category_id INT NOT NULL,
  item_image_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT items_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id),
  CONSTRAINT items_item_image_id_fkey FOREIGN KEY (item_image_id) REFERENCES item_images(id)
);
-- migrate:down
DROP TABLE items;
