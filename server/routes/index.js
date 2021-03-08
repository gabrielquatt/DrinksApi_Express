const express = require("express");
const drinkdb = require("../db/querys/drinksQuerys");
const categorydb = require("../db/querys/categoryQuerys");

const router = express.Router();

// Router drinks

router.get("/category", async (req, res) => {
  try {
    let result = await categorydb.all();
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/", async (req, res) => {
  try {
    let result = await drinkdb.all();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let result = await drinkdb.one(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let result = await drinkdb.deleted(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/category/:id", async (req, res) => {
  try {
    let result = await categorydb.deleted(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/category", async (req, res) => {
  const { title, rightColor, leftColor } = req.body;
 
  try {
    let result = await categorydb.add(title, rightColor, leftColor);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  const {
    title,
    description,
    logo,
    rightColor,
    leftColor,
    id_category,
  } = req.body;
  if (
    title == "" ||
    description == "" ||
    logo == "" ||
    rightColor == "" ||
    leftColor == "" ||
    id_category == " "
  ) {
    res.sendStatus(400);
  }
  try {
    let result = await drinkdb.add(
      title,
      description,
      logo,
      rightColor,
      leftColor,
      id_category
    );
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/", async (req, res) => {
  const {
    title,
    description,
    logo,
    rightColor,
    leftColor,
    id_category,
    id,
  } = req.body;
  try {
    let result = await drinkdb.edit(
      title,
      description,
      logo,
      rightColor,
      leftColor,
      id_category,
      id
    );
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/category", async (req, res) => {
  const { title, rightColor, leftColor, id } = req.body;
  try {
    let result = await categorydb.edit(title, rightColor, leftColor, id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
