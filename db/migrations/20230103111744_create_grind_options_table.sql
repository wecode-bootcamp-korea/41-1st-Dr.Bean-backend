-- migrate:up
CREATE TABLE grind_options (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  grind VARCHAR(100) NOT NULL
);
-- migrate:down
DROP TABLE grind_options;
