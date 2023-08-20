import express, { Application } from "express"
import { connect } from "./Infra/database"
import { intercepterError } from "./http/middlewares/interception";
import { Route } from "./routes/routes";

class App {
    public app: Application;
    private eventRoutes = new Route();

    constructor(){
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRouter();
        this.interceptError();
        connect();
    }

    initializeRouter()
    {
        this.app.use('/events', this.eventRoutes.router);
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
