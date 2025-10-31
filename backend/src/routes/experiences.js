const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');


router.get('/', async (req, res)=>{
const items = await Experience.find({});
res.json(items);
});



router.get('/:id', async (req, res)=>{
const item = await Experience.findById(req.params.id);
if(!item) return res.status(404).json({ message: 'Not found' });
res.json(item);
});


module.exports = router;