import { IsIn, IsNotEmpty, Length, ValidateIf } from "class-validator";
import { Schema } from "mongoose";
import 'reflect-metadata';

const allowedTypes = ["list", "string"];

export class ParamCreateDto {
    

    @IsNotEmpty({message: "CategoryId is required"})
    categoryId: string;

    @IsNotEmpty({message: "Name should not be empty"})
    @Length(1, 100, {message: "Name length should be from 1 to 100"})
    name: string;

    @IsNotEmpty({message: "Type should not be empty"})
    @IsIn(allowedTypes)
    type: string;

    constructor(categoryId: string, name: string, type: string){
        this.categoryId = categoryId;
        this.name = name;
        this.type = type;
    }
}