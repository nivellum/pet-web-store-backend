import { IsNotEmpty, Length } from "class-validator";

export class ParamListValueCreateDto {
    @IsNotEmpty({message: "Name should not be empty"})
    @Length(1, 100, {message: "Name length should be from 1 to 100"})
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

