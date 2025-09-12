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
            sucess: true,
            data: barbie
        });
    } else {
        res.status(400).json({
            sucess: false,
            message: `Bruxo com id ${id} não encontrado`
        });
    }
}

const createBarbie = (req, res) => {
    const {nome, profissao, anoLancamento} = req.body;

    if (!nome || !profissao) {
        return res.status(400).json({
            sucess: false,
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
        sucess: true,
        message: "Barbie cadastrada com sucesso",
        barbie: novaBarbie
    });
}

const deleteBarbie = (req, res) => {
    let id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            sucess: false,
            message: "O ID deve ser válido"
        });
    }

        const barbierParaRemover = barbies.find(b => b.id ===id);

        if (!barbierParaRemover) {
            return res.status(404).json({
                sucess: false,
                message: `Barbie com o id ${id} não existe`
            });
        }

        const barbiesFiltreadas = barbies.filter(barbie => barbie.id !== id);

        barbies.splice(0, barbies.length, ...barbiesFiltreadas);

        res.status(200).json({
            sucess: true,
            message: `A barbie com id ${id} for removido com sucesso`
        });
    };


export {getAllBarbies, getByIdBarbies, createBarbie, deleteBarbie};