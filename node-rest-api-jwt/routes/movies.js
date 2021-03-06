/**
 * Created by Roman on 11.07.2018.
 */
const express = require('express');
const router = express.Router();
const movieController = require('../app/api/controllers/movies');
router.get('/', movieController.getAll);
router.post('/', movieController.create);
// router.get('/:movieId', movieController.getById);
// router.put('/:movieId', movieController.updateById);
router.delete('/:movieName', movieController.deleteByName);
module.exports = router;