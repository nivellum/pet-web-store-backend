import { Router } from "express";
import { ValidationMiddleware } from "../middlewares/validationMiddleware";
import { ParamController } from "../controllers/paramController";
import { ParamCreateDto } from "../dtos/Param/paramCreateDto";
import { ParamUpdateDto } from "../dtos/Param/paramUpdateDto";

const router: Router = Router();

router.get('/params', ParamController.getAll);
router.get('/params/:paramId', ParamController.getOne);
router.post('/params/', ValidationMiddleware(ParamCreateDto), ParamController.create);
router.put('/params/:paramId', ValidationMiddleware(ParamUpdateDto), ParamController.update);
router.delete('/params/:paramId', ParamController.remove);

export default router;