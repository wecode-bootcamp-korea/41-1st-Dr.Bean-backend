-- migrate:up
CREATE TABLE size_options (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  grams INT NOT NULL,
  option_price INT NOT NULL
);
-- migrate:down
DROP TABLE size_options;
