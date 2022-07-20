const express = require('express'); //
const router = express.Router();

const SetorController = require('../Controller/SetorController');
const EncarregadoController = require('../Controller/EncarregadoController');
const FuncionarioController = require('../Controller/FuncionarioController');
const HorasExtrasController = require('../Controller/HorasExtrasController');


// ROTAS
router.post('/setor', SetorController.store);
router.get('/setores', SetorController.index);
router.put('/setores/:id', SetorController.put);
router.delete('/setores/:id', SetorController.delete);

router.post('/setores/:setorId/encarregados', EncarregadoController.store);
router.get('/setores/:setorId/encarregados', EncarregadoController.index);

router.post('/funcionarios', FuncionarioController.store);
router.get('/funcionarios/:id', FuncionarioController.index);

router.post('/funcionarios/:funcionarioId/horasextras/:qtdHoras', HorasExtrasController.store);
router.get('/funcionarios/:funcionarioId/horasextras', HorasExtrasController.index);


module.exports = router;