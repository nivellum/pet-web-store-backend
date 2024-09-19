import { IsNotEmpty, Length } from "class-validator";
import 'reflect-metadata';

export class CategoryUpdateDto {
    @IsNotEmpty({message: "Name should not be empty"})
    @Length(1,100, {message: "Name length should be between 1 and 100 characters"})
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}   