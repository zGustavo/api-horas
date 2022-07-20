const models = require('../models/');
const HorasExtras = models.HorasExtras;
const Funcionario = models.Funcionario;

module.exports = {
    async store(req, res) {
        const { funcionarioId, qtdHoras } = req.params;
        const { justificativa } = req.body;

        const funcionario = await Funcionario.findByPk(funcionarioId);

        let totalFuncHorasExtras = 0;


        if (!funcionario) {
            return res.send("Funcionário invalido ou não existe");
        }
        /* const horasExtras = await HorasExtras.create({ funcionarioId, qtdHoras, data, justificativa }); */
        const horasExtras = await HorasExtras.findAll({
            where: {
                funcionarioId: funcionario.id
            }
        })

        for (let i = 0; i < horasExtras.length; i++) {
            totalFuncHorasExtras += horasExtras[i].qtdHoras
        }

        if((totalFuncHorasExtras + Number(qtdHoras)) > 60) {
            return res.send('LIMITE ULTRAPASSADO');
        } else {
            const novaHora = await HorasExtras.create( {
                funcionarioId, qtdHoras, justificativa
            });
            return res.json(novaHora);
        }

        
    },

    async index(req, res) {
        const { funcionarioId } = await req.params;

        if(!funcionarioId) {
            res.send('Funcionario invalido ou não existe');
        }

        const funcionario = await Funcionario.findByPk(funcionarioId, {
            include: [HorasExtras],
        });
        return res.json(funcionario);
    },
};