const models = require('../models/');
const Funcionario = models.Funcionario;
const Setor = models.Setor;
const Encarregado = models.Encarregado;

module.exports = {
    async store(req, res) {
        const { name, setorId, funcao, encarregadoId } = req.body;

        const funcionario = await Funcionario.create({ name, setorId, funcao, encarregadoId });
        return res.json(funcionario);
    },

    async index(req, res) {
        const { id } = req.params;

        if(!id) {
            res.send('Funcionário não existe');
        } else {
            const funcionario = await Funcionario.findByPk(id, {
                include: [Setor, Encarregado],
            });
            return res.json(`Nome: ${funcionario.name} ` + `Setor: ${funcionario.Setor.name} ` + `Chefia imediata: ${funcionario.Encarregado.name}`);
        }
    },
};