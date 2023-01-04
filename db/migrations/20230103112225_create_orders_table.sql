-- migrate:up
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  user_address_id INT NOT NULL,
  order_status_id INT NOT NULL,
  order_item_id INT NOT NULL,
  CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT orders_user_address_id_fkey FOREIGN KEY (user_address_id) REFERENCES users_address(id),
  CONSTRAINT orders_order_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_status(id),
  CONSTRAINT orders_order_item_id_fkey FOREIGN KEY (order_item_id) REFERENCES order_items(id)
);
-- migrate:down
DROP TABLE orders;
