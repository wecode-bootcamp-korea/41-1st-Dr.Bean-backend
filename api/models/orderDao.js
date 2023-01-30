const { mysqlDatabase } = require("./dbconfig");

const ORDER_STATUS = Object.freeze({
  상품준비중: 1,
  배송중: 2,
  배송완료: 3,
});

const getOrder = async (userId) => {
  return await mysqlDatabase.query(
    `
      SELECT
        name,
        phone_num,
        email,
        point
      FROM users
      WHERE id = ?
      `,
    [userId]
  );
};

const addressAndItems = async (zipCode, address, reAddress, message, size, grind, itemId, userId) => {
  const queryRunner = mysqlDatabase.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query(
      `
      INSERT INTO users_address (
        zip_code,
        address,
        remaining_address,
        delivery_message,
        user_id
      ) VALUES (?, ?, ?, ?, ?)
      `,
      [zipCode, address, reAddress, message, userId]
    );

    const [itemOptions] = await queryRunner.query(
      `
      SELECT
        id
      FROM item_options
      WHERE size_option_id = ? AND grind_option_id = ? AND item_id = ?
      `,
      [size, grind, itemId]
    );

    const [user] = await queryRunner.query(
      `
      SELECT
        id
      FROM users_address
      WHERE user_id = ?
      `,
      [userId]
    );

    await queryRunner.query(
      `
      INSERT INTO orders (
        user_id,
        user_address_id,
        order_status_id
      ) VALUES (?, ?, ?)
      `,
      [userId, user.id, ORDER_STATUS.배송중]
    );

    const [orderId] = await queryRunner.query(
      `
      SELECT
        id
      FROM orders
      WHERE user_id = ?
      `,
      [userId]
    );

    await queryRunner.query(
      `
      INSERT INTO order_items (
        item_id,
        quantity,
        item_option_id,
        order_status_id,
        order_id
      ) VALUES (?, ?, ?, ?, ?)
      `,
      [itemId, 1, itemOptions.id, ORDER_STATUS.배송중, orderId.id]
    );

    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    throw new Error("ORDER_FAILED");
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  getOrder,
  addressAndItems,
};
