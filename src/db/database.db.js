import { Sequelize } from "sequelize";
import { employeeModel } from "../model/employee.model.js";
// import { salaryModel } from "../model/salary.model.js";
import "dotenv/config";
/* const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.SQL_PORT,
    dialect: process.env.DIALECT,
    dialectOptions: {
      options: { encrypt: false },
    },
  }
); */

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.SQL_PORT}/${process.env.DB}`
);

const db = {};
db.employee = employeeModel(sequelize);
// db.salary = salaryModel(sequelize);
// db.employee.hasMany(db.salary, {
//   foreignKey: "id",
// });
sequelize.sync({ alter: true });
export { db };
