import { Router } from "express";
import {
  deleteEmpByPk,
  getAllEmployee,
  getEmpByPk,
  insertEmployee,
  updateEmployee,
} from "../services/employee.services.js";

const empRouter = Router();

empRouter.post("/", async (request, response) => {
  try {
    let newEmp = await insertEmployee(request.body);
    console.log(newEmp);
    response.status(201).json(newEmp);
  } catch (err) {
    console.error(`Exception in /employee/ - post - route - ${err}`);
    response.status(500).json({ message: "someting went wrong" });
  }
});

empRouter.get("/", async (request, response) => {
  try {
    let resultData = await getAllEmployee();
    console.log("resultData ==> ", resultData);
    response.status(200).json(resultData);
  } catch (err) {
    console.error(`Exception in /employee/ - get - route - ${err}`);
    response.status(500).json({ message: "something went wrong" });
  }
});

empRouter.get("/:empId", async (request, response) => {
  try {
    let data = await getEmpByPk(parseInt(request.params.empId));
    console.log("emp data => ", data);
    response.status(201).json(data);
  } catch (err) {
    console.error(`Exception in /employee/:empid - get - route - ${err}`);
    response.status(500).json({ message: "something went wrong" });
  }
});

empRouter.delete("/:empId", async (request, response) => {
  try {
    let deletedData = await deleteEmpByPk(Number(request.params.empId));
    console.log("deleted data ==>", deletedData);
    response.status(201).json(deletedData);
  } catch (err) {
    console.error(`Exception in /employee/ - delete - route - ${err}`);
    response.status(500).json({ message: "something went wrong" });
  }
});

empRouter.put("/:empId", async (request, response) => {
  try {
    let updatedData = await updateEmployee(
      Number(request.params.empId),
      request.body
    );
    console.log("udpated data ==> ", updatedData);
    response.status(201).json(updatedData);
  } catch (err) {
    console.error(`Exception in /employee/ - put - route - ${err}`);
    response.status(500).json({ message: "something went wrong" });
  }
});

export { empRouter };
