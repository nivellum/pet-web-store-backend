import { Router } from "express";
import { BaseCategoryController } from '../controllers/baseCategoryController';
import { ValidationMiddleware } from "../middlewares/validationMiddleware";
import { CategoryCreateDto } from "../dtos/category/categoryCreateDto";
import { CategoryUpdateDto } from "../dtos/category/categoryUpdateDto";
// import { CreateCategoryParamDto } from "../dtos/createParamDto";
// import { CreateCategoryParamListValueDto } from "../dtos/createParamListValueDto";
// import { UpdateCategoryParamDto } from "../dtos/updateParamDto";

const router: Router = Router();

router.get('/base-categories', BaseCategoryController.getAll);
router.post('/base-categories/', ValidationMiddleware(CategoryCreateDto), BaseCategoryController.create);
router.put('/base-categories/:baseCategoryId', ValidationMiddleware(CategoryUpdateDto), BaseCategoryController.update);
router.delete('/base-categories/:baseCategoryId', BaseCategoryController.remove)

export default router;