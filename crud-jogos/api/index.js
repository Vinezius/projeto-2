const express = require('express');
const cors = require('cors');
const server = express();
const admin = require('./routes/admin');
const jogos = require('./routes/jogos');

server.use(express.json());
server.use(cors());
server.use('/admin', admin);
server.use('/admin/login', admin);
server.use('/jogos', jogos);
server.use('/jogos/:id', jogos);
server.listen(3001, () => {
    console.log('Ouvindo na porta 3001');
});