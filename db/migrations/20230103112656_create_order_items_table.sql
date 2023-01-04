-- migrate:up
CREATE TABLE order_items (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  item_option_id INT NOT NULL,
  order_status_id INT NOT NULL,
  CONSTRAINT order_items_item_id_fkey FOREIGN KEY (item_id) REFERENCES items(id),
  CONSTRAINT order_items_item_option_id_fkey FOREIGN KEY (item_option_id) REFERENCES item_options(id),
  CONSTRAINT order_items_order_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_status(id)
);
-- migrate:down
DROP TABLE order_items;
