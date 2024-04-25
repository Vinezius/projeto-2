const { db } = require("../db");
const express = require("express");
const router = express();

router.get("/", (req, res) => {
    try{
        const query = `SELECT * FROM jogos`;
        db.query(query, (err, result) => {
            if(err){
                console.log(err);
                return res.status(400).json({ error: "Erro ao tentar listar jogos" });
            }
            return res.status(200).json(result);
        });
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ error: "Erro ao tentar listar jogos" });
    }
});

router.post("/", (req, res) => {
    try{
        const { nome, desenvolvedora, ano_lancamento } = req.body;
        const query = `INSERT INTO jogos (nome, desenvolvedora, ano_lancamento) VALUES ('${nome}', '${desenvolvedora}', '${ano_lancamento}')`;
        db.query(query, (err, result) => {
            if(err){
                console.log(err);
                return res.status(400).json({ error: "Erro ao tentar adicionar jogo" });
            }
            return res.status(200).json({ message: "Jogo adicionado com sucesso" });
        });
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ error: "Erro ao tentar adicionar jogo" });
    }
});

router.put("/:id", (req, res) => {
    try{
        const { nome, desenvolvedora, ano_lancamento } = req.body;
        const { id } = req.params;
        const query = `UPDATE jogos SET nome = '${nome}', desenvolvedora = '${desenvolvedora}', ano_lancamento = '${ano_lancamento}' WHERE id_jogo = ${id}`;
        db.query(query, (err, result) => {
            if(err){
                console.log(err);
                return res.status(400).json({ error: "Erro ao tentar atualizar jogo" });
            }
            return res.status(200).json({ message: "Jogo atualizado com sucesso" });
        });
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ error: "Erro ao tentar atualizar jogo" });
    }
});

router.delete("/:id", (req, res) => {
    try{
        const { id } = req.params;
        const query = `DELETE FROM jogos WHERE id_jogo = ${id}`;
        db.query(query, (err, result) => {
            if(err){
                console.log(err);
                return res.status(400).json({ error: "Erro ao tentar deletar jogo" });
            }
            return res.status(200).json({ message: "Jogo deletado com sucesso" });
        });
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ error: "Erro ao tentar deletar jogo" });
    }
});

module.exports = router;