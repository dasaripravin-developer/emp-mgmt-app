import { DataTypes } from "sequelize";

export function employeeModel(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(30), allowNull: false },
    email: { type: DataTypes.STRING(30), allowNull: false },
  };

  const options = {
    freezeTableName: true,
    timestamps: false,
  };
  return sequelize.define("employee", attributes, options);
}
