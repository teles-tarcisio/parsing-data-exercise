import { Router } from "express";
import * as sponsoredController from '../controllers/sponsoredController.js';

const sponsoredRouter = Router();
sponsoredRouter.get('/sponsored', sponsoredController.getSponsoredRepos);

export default sponsoredRouter;
