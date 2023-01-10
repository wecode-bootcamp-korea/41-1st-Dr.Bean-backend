-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  phone_num INT NOT NULL,
  point DECIMAL(10, 3) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT users_ukey_user_id UNIQUE (user_id),
  CONSTRAINT users_ukey_email_id UNIQUE (email),
  CONSTRAINT users_ukey_phone_num UNIQUE (phone_num)
 );
-- migrate:down
DROP TABLE users;
