module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  });

  return Transaction;
};
