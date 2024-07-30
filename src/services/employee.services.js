import { where } from "sequelize";
import { db } from "../db/database.db.js";

export async function insertEmployee(record) {
  try {
    return await db.employee.create(record);
  } catch (err) {
    console.log(`insertEmployee - exception - ${err}`);
  }
}

export async function getAllEmployee() {
  try {
    return await db.employee.findAll();
  } catch (err) {
    console.log(`get all employee - exception - ${err}`);
  }
}

export async function getEmpByPk(id) {
  try {
    return await db.employee.findByPk(id);
  } catch (err) {
    console.log(`get employee by pk - exception - ${err}`);
  }
}

export async function updateEmployee(id, updateData) {
  try {
    return await db.employee.update(updateData, {
      where: { id },
    });
  } catch (err) {
    console.log(`update emp - exception - ${err}`);
  }
}

export async function deleteEmpByPk(id) {
  try {
    return await db.employee.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(`delete emp by pk - exception - ${err}`);
  }
}


