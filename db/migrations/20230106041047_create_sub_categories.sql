-- migrate:up
CREATE TABLE sub_categories (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  country VARCHAR(100) NOT NULL,
  content VARCHAR(200) NOT NULL,
)
-- migrate:down
DROP TABLE sub_categories;
