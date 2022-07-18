const models = require('../models');
const Setor = models.Setor;

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const setor = await Setor.create({ name });
        return res.json(setor);
    },

    async index(req, res) {
        const setor = await Setor.findAll();
        return res.json(setor);
    },

    async put(req, res) {
        const { name } = req.body;
        await Setor.update(
            { name },
            {
                where: {
                    id: req.params.id
                },
            },
        );
        return res.send('Setor atualizado com sucesso!');
    },

    async delete(req, res) {
        await Setor.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.send('Setor deletado com sucesso!')
    },
};