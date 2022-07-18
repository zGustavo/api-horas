const models = require('../models/');
const Encarregado = models.Encarregado;
const Setor = models.Setor;

module.exports = {
    async store(req, res) {
        const { setorId } = req.params;
        const { name } = req.body;

        const setor = await Setor.findByPk(setorId);

        if(!setor) {
            res.send("Esse setor não existe");
        } else {
            const encarregado = await Encarregado.create({ name, setorId });
            return res.json(encarregado);
        }

    },

    async index (req, res) {
        const { setorId } = await req.params;

        if(!setorId ) {
            res.send('Esse setor não existe');
        }

        const setor = await Setor.findByPk(setorId, {
            include: [Encarregado],
        });
        return res.json(setor);
    },
};