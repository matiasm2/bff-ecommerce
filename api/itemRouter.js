var express = require('express');
const ItemService = require('../service/itemService');
var router = express.Router();

const service = new ItemService();

router.get('/items', async (req, res, next) => {
  try{
    if (req.query.q) {
      res.json(await service.getItemPage(req.query.q));
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(500).send()
  }
});

router.get('/items/:id', async (req, res) => {
  try{
    if (req.params.id) {
      res.json(await service.getItemDetail(req.params.id));
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router;
