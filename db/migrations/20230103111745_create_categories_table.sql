-- migrate:up
CREATE TABLE categories (  
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  country VARCHAR(100) NOT NULL,
  continent_img VARCHAR(100) NULL
);
-- migrate:down
DROP TABLE categories;
