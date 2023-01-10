const { mysqlDatabase } = require("./dbconfig");

const ORDER_STATUS = Object.freeze({
  상품준비중: 1,
  배송중: 2,
  배송완료: 3,
});

const getOrder = async (userId) => {
  try {
    const result = await mysqlDatabase.query(
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
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

//트랜잭션 필수

const createOrupdateUserAddresss = () => {
}

const createOrderData = () => {

}

const createOrderItemsData = () => {

}

const createOrder = () => {
  try {
    queryRunner.startTransaction()

    await createOrupdateUserAddresss()
    await createOrderItemsData()
    await createOrder()
  } catch {
    queryRunner.rollbackTransaction()
  }
}

const addressAndItems = async (zipCode, address, reAddress, message, size, grind, itemId, userId) => {
  try {
    await mysqlDatabase.query(
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

    await mysqlDatabase.query(
      `
      INSERT INTO item_options (
        size_option_id,
        grind_option_id,
        item_id
      ) VALUES(?, ?, ?)
      `,
      [size, grind, itemId]
    );

    const [result] = await mysqlDatabase.query(
      `
      SELECT
        id
      FROM users_address
      WHERE id = ?
      `,
      [userId]
    );

    await mysqlDatabase.query(
      `
      INSERT INTO orders (
        user_id,
        user_address_id,
        order_status_id
      ) VALUES (?, ?, ?)
      `,
      [userId, result.id, ORDER_STATUS.배송중]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  getOrder,
  addressAndItems,
};
