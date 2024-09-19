import { Router } from "express";
import { CategoryController } from '../controllers/categoryController';
import { ValidationMiddleware } from "../middlewares/validationMiddleware";
import { CategoryCreateDto } from "../dtos/category/categoryCreateDto";
import { CategoryUpdateDto } from "../dtos/category/categoryUpdateDto";

const router: Router = Router();

router.get('/categories', CategoryController.getAll);
router.post('/categories/', ValidationMiddleware(CategoryCreateDto), CategoryController.create);
router.put('/categories/:categoryId', ValidationMiddleware(CategoryUpdateDto), CategoryController.update);
router.delete('/categories/:categoryId', CategoryController.remove);

export default router;