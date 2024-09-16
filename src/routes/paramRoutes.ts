import { Router } from "express";
import validationMiddleware from "../middlewares/validationMiddleware";
import {getParams, getParam, createParam, updateParam } from "../controllers/paramController";
import { CreateParamDto } from "../dtos/createParamDto";
import { create } from "domain";
import { UpdateParamDto } from "../dtos/updateParamDto";
const router: Router = Router();

router.get('/params',  getParams);
router.get('/params/:paramId',  getParam);
router.post('/params/', validationMiddleware(CreateParamDto), createParam);
router.put('/params/:paramId', validationMiddleware(UpdateParamDto), updateParam);