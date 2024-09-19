import { IsNotEmpty, Length } from "class-validator";
import 'reflect-metadata';

export class CategoryCreateDto {
    @IsNotEmpty({message: "Name should not be empty"})
    @Length(1,100, {message: "Name length should be between 1 and 100 characters"})
    name: string;

    @IsNotEmpty({message: "BaseCategoryId is required"})
    baseCategoryId: string;

    constructor(name: string, baseCategoryId: string) {
        this.name = name;
        this.baseCategoryId = baseCategoryId;
    }
}   