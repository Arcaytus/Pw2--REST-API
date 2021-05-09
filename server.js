const express = require('express');
const { PORT } = require('./src/config');
const routingAPI = require('./src/handlers');


const app = express();

app.use(express.json());



// THIS MAY WORK
//app.get("/",(req,res) => res.send("Response from the GET request"));





app.use(routingAPI);

const server = app.listen(PORT, () => {
    console.info(`Escuchando en puerto ${PORT}`);
});


