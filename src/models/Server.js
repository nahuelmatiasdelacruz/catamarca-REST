const cors = require("cors");
const path = require("path");
const express = require("express");
const { dbConnection } = require("../db/dbConfig");
const { routesPath } = require("../config/routes");

class Server{
    constructor(){
        this.conectarDb();
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.conectarDb();
        this.middlewares();
    }
    async conectarDb(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static(path.join(__dirname,"..","client","build")));
    }
    routes(){
        this.app.use(routesPath.users,require("../routes/users"));
        this.app.use(routesPath.empleados,require("../routes/empleados"));
    }
    listen(){
        this.app.get("/",(req,res)=>{
            res.sendFile(path.join(__dirname,"..","client","build","index.html"));
        })
        this.app.listen(this.port,()=>{
            console.log("Server ON! - Puerto: " + this.port)
        });
    }

}

module.exports = Server;