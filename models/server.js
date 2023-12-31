const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //CORS 
        this.app.use( cors() )

        //LECTURA Y PARSEO DEL BODY
        this.app.use( express.json() )

        //DIrectorio publico
        this.app.use(express.static('public'));
    }

    routes(){
       this.app.use('/api/usuarios', require('../routes/usuarios'))
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port)
        })
    }
}



module.exports = Server;