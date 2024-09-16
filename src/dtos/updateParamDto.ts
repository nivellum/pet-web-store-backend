import { IsIn, IsNotEmpty, Length, ValidateIf } from "class-validator";
import { Schema } from "mongoose";
import 'reflect-metadata';

export class UpdateParamDto {
    
    @IsNotEmpty({message: "Name should not be empty"})
    @Length(1, 100, {message: "Name length should be from 1 to 100"})
    name: string;

    constructor(name: string, type: string){
        this.name = name;
    }
}