const express = require("express");
const { db } = require("../db");
const router = express();

router.post("/login", (req, res) => {
    try{
        const { email, senha } = req.body;
        const query = `SELECT * FROM admin WHERE email = '${email}' AND senha = '${senha}'`;
        db.query(query, (err, result) => {
            if(err){
                console.log(err);
                return res.status(204).send({ message: "Erro ao tentar logar" });
            }
            if(result.length === 0){
                return res.status(204).send({ message: "Usuário ou senha incorretos" });
            }
            return res.status(200).send({ message: "Login efetuado com sucesso" });
        });
    }
    catch(err){
        console.log(err);
        return res.status(204).send({ message: "Erro ao tentar logar" });
    }
});

router.post("/", (req, res) => {
    try{
        const { email, senha, nome } = req.body;
        const query = `INSERT INTO admin (email, senha, nome) VALUES ('${email}', '${senha}', '${nome}')`;
        db.query(query, (err, result) => {
            if(err){
                console.log(err);
                return res.status(204).send({ message: "Erro ao tentar registrar" });
            }
            return res.status(200).send({ message: "Registrado com sucesso" });
        });
    }
    catch(err){
        console.log(err);
        return res.status(204).send({ message: "Erro ao tentar registrar" });
    }
});

module.exports = router;