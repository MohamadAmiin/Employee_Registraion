import express from "express";
import { employeeModel } from "../models/empolyee.js";

const router = express.Router();

router.post("/addUser/", async (req, res) => {
  const { name, email, phoneNumber, address, city, state, country } = req.body;
  try {
    const newEmpolyee = new employeeModel({
      name,
      email,
      phoneNumber,
      address,
      city,
      state,
      country,
    });
    await newEmpolyee.save();
    console.log(newEmpolyee);
    res
      .status(201)
      .json({ message: "New Empolyee is created", data: newEmpolyee });
  } catch (err) {
    console.log("fial to create empolyee", err);
    res.status(500).json({ message: "Error creating empolyee", error: err });
  }
});

router.get("/empolyee/", async (req, res) => {
  try {
    const empolyeeData = await employeeModel.find();
    res.json(empolyeeData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Employee Data", error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteEmpolyee = await employeeModel.findByIdAndDelete(req.params.id);
    if (!deleteEmpolyee) {
      return res.status(404).json({ message: "Empolyee Founded " });
    }
    res.json({
      message: "Employee deleted successfully",
      data: deleteEmpolyee,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Empolyee", error });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const empolyeeId = req.params.id;
    const updateData = req.body;
    const updateEmpolyee = await employeeModel.findByIdAndUpdate(
      empolyeeId,
      updateData,
      { new: true }
    );

    if (!updateEmpolyee) {
      return res.status(404).json({ message: "Empolyee Not Found" });
    }
    res.json({ message: "Empolyee Update successfuly", data: updateEmpolyee });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Empolyee", error });
  }
});

export default router;
