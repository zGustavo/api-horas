const express = require('express'); //
const router = express.Router();

const SetorController = require('../Controller/SetorController');
const EncarregadoController = require('../Controller/EncarregadoController');


// ROTAS
router.post('/setor', SetorController.store);
router.get('/setores', SetorController.index);
router.put('/setores/:id', SetorController.put);
router.delete('/setores/:id', SetorController.delete);

router.post('/setores/:setorId/encarregados', EncarregadoController.store);
router.get('/setores/:setorId/encarregados', EncarregadoController.index);

module.exports = router;