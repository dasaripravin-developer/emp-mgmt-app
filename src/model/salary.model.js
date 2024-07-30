import { DataTypes } from "sequelize";

export function salaryModel(sequelize) {
  const attributes = {
    salaryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: { type: DataTypes.INTEGER, allowNull: false },
    month: { type: DataTypes.STRING(10), allowNull: false },
    // id: { type: DataTypes.INTEGER, allowNull: false },
  };

  const options = {
    freezeTableName: true,
    timestamps: false,
  };
  return sequelize.define("salary", attributes, options);
}
