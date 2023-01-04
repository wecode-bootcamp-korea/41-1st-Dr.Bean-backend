-- migrate:up
CREATE TABLE item_options (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  grind_option_id INT NOT NULL,
  size_option_id INT NOT NULL,
  item_id INT NOT NULL,
  CONSTRAINT item_options_grind_option_id_fkey FOREIGN KEY (grind_option_id) REFERENCES grind_options(id),
  CONSTRAINT item_options_size_option_id_fkey FOREIGN KEY (size_option_id) REFERENCES size_options(id),
  CONSTRAINT item_options_item_id_fkey FOREIGN KEY (item_id) REFERENCES items(id)
);
-- migrate:down
DROP TABLE item_options;