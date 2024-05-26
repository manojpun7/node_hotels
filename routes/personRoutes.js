const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");
//post route to add an person

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "internal server error" });
  }
});

//get method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("worked fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "internal server error" });
  }
});

//updating record using post method

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      { new: true, runValidators: true }
    );
    if (!response) {
      res.status(404).json({ error: "person not found" });
    }
    console.log("data updated successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log("error");
    res.status(404).json("error finding data");
  }
});

//deleting record using delete method

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      res.status(404).json({ error: "person not found" });
    }
    console.log("data deleted successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log("error");
    res.status(404).json("error finding data");
  }
});

module.exports = router;


//git testing by pushing haha