-- migrate:up
CREATE TABLE users_address (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR(200) NOT NULL
);
-- migrate:down
DROP TABLE users_address;
