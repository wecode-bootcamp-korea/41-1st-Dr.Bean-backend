-- migrate:up
CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  user_id INT NOT NULL,
  item_id INT NOT NULL,
  item_option_id INT NOT NULL,
  CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT carts_item_id_fkey FOREIGN KEY (item_id) REFERENCES items(id),
  CONSTRAINT carts_item_option_id_fkey FOREIGN KEY (item_option_id) REFERENCES item_options(id)
);
-- migrate:down
DROP TABLE carts;
