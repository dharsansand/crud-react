const express = require('express');
const routes = express.Router();
const Item = require('../modules/user');


routes.post('/post', async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem); 
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


routes.get('/get', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

routes.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedItem);
        }
       
     catch (err) {
        res.status(400).json({ error: err.message });
    }
});

routes.delete('/:id', async (req, res) => {
    try {
     await Item.findByIdAndDelete(req.params.id);
      
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = routes;
