import { Router } from "express";
import * as CategoryController from '../controllers/categoryController';
import validationMiddleware from "../middlewares/validationMiddleware";
import { CreateCategoryDto } from "../dtos/createCategoryDto";
import { UpdateCategoryDto } from "../dtos/updateCategoryDto";
// import { CreateCategoryParamDto } from "../dtos/createParamDto";
// import { CreateCategoryParamListValueDto } from "../dtos/createParamListValueDto";
// import { UpdateCategoryParamDto } from "../dtos/updateParamDto";

const router: Router = Router();

router.get('/categories', CategoryController.getCategories);
router.post('/categories/', validationMiddleware(CreateCategoryDto), CategoryController.createCategory);
router.put('/categories/:categoryId', validationMiddleware(UpdateCategoryDto), CategoryController.updateCategory);

export default router;