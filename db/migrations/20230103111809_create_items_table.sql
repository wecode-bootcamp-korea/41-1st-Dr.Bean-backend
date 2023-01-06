-- migrate:up
CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(1000) NULL,
  item_img VARCHAR(2000) NOT NULL,
  price INT NOT NULL,
  category_id INT NOT NULL,
  country_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT items_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id),
  CONSTRAINT items_country_id_fkey FOREIGN KEY (country_id) REFERENCES sub_categories(id),
);
-- migrate:down
DROP TABLE items;
