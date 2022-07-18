const express = require('express'); //
const router = express.Router();

const SetorController = require('../Controller/SetorController');


// ROTAS
router.post('/setor', SetorController.store);
router.get('/setores', SetorController.index);
router.put('/setores/:id', SetorController.put);
router.delete('/setores/:id', SetorController.delete);

module.exports = router;