import dados from "../models/data.js";
const {barbies} = dados;

const getAllBarbies = (req, res) => {
    res.status(200).json({
        total: barbies.length,
        data: barbies
    });
}

const getByIdBarbies = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const barbie = barbies.find(b => b.id === id);

    if (barbie) {
        res.status(200).json({
            success: true,
            data: barbie
        });
    } else {
        res.status(400).json({
            success: false,
            message: `Bruxo com id ${id} não encontrado`
        });
    }
}

const createBarbie = (req, res) => {
    const {nome, profissao, anoLancamento} = req.body;

    if (!nome || !profissao) {
        return res.status(400).json({
            success: false,
            message: "Nome e profissão são obrigatórios"
        });
    }

    const novaBarbie = {
        id: barbies.length + 1,
        nome,
        profissao,
        anoLancamento
    }

    barbies.push(novaBarbie);

    res.status(201).json({
        success: true,
        message: "Barbie cadastrada com sucesso",
        barbie: novaBarbie
    });
}

const deleteBarbie = (req, res) => {
    let id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O ID deve ser válido"
        });
    }

        const barbieParaRemover = barbies.find(b => b.id ===id);

        if (!barbieParaRemover) {
            return res.status(404).json({
                sucess: false,
                message: `Barbie com o id ${id} não existe`
            });
        }

        const barbiesFiltradas = barbies.filter(barbie => barbie.id !== id);

        barbies.splice(0, barbies.length, ...barbiesFiltradas);

        res.status(200).json({
            sucess: true,
            message: `A barbie com id ${id} for removido com sucesso`
        });
    };


export {getAllBarbies, getByIdBarbies, createBarbie, deleteBarbie};