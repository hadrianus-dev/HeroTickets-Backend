import { Router } from "express";

class Route {
    public router: Router;
    constructor() {
       this.router = Router(); 
       this.initRoutes();
    }

    initRoutes()
    {
        this.router.post('/');
    }
}

export { Route }
