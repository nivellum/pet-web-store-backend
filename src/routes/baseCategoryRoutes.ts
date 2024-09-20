import { Router } from "express";
import { BaseCategoryController } from '../controllers/baseCategoryController';
import { ValidationMiddleware } from "../middlewares/validationMiddleware";
import { BaseCategoryCreateDto } from "../dtos/baseCategory/baseCategoryCreateDto";
import { BaseCategoryUpdateDto } from "../dtos/baseCategory/baseCategoryUpdateDto";

const router: Router = Router();

router.get('/base-categories', BaseCategoryController.getAll);
router.post('/base-categories/', ValidationMiddleware(BaseCategoryCreateDto), BaseCategoryController.create);
router.put('/base-categories/:baseCategoryId', ValidationMiddleware(BaseCategoryUpdateDto), BaseCategoryController.update);
router.delete('/base-categories/:baseCategoryId', BaseCategoryController.remove)

export default router;