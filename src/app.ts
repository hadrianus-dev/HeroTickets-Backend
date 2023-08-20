import express, { Application } from "express"
import { connect } from "./infra/database"
import { intercepterError } from "./http/middlewares/interception";

class App {
    public app: Application

    constructor(){
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRouter();
        this.interceptError();
        connect();
    }

    initializeRouter()
    {
           
    }

    interceptError()
    {   
        this.app.use(intercepterError);
    }

    middlewaresInitialize()
    {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    listen(){
        this.app.listen(3333, () => console.log('server is running'));
    }
}

export {App};
