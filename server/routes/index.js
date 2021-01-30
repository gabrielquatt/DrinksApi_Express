const express = require('express');
const db = require('../db/connection');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let result = await db.all();
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    };
});


router.get('/:id', async (req, res) => {
    try {
        let result = await db.one(req.params.id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    };
});

router.delete('/:id', async (req, res) => {
    try {
        let result = await db.deleted(req.params.id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    };
});

router.post('/', async (req, res) => {
    const {title, description, logo,rightColor,leftColor} = req.body;

    if(title==""||description==""|| logo==""||rightColor==""||leftColor==""){
        res.sendStatus(400);
    }

    try {
        let result = await db.add(title,description,logo,rightColor,leftColor);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    };
});


router.put('/', async (req, res) => {
    const {title, description, logo,rightColor,leftColor,id} = req.body;
    try {
        let result = await db.edit(title,description,logo,rightColor,leftColor,id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    };
});



module.exports = router;