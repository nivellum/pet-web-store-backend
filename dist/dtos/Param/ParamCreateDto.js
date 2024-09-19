"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamCreateDto = void 0;
const class_validator_1 = require("class-validator");
require("reflect-metadata");
const allowedTypes = ["list", "string"];
class ParamCreateDto {
    constructor(categoryId, name, type) {
        this.categoryId = categoryId;
        this.name = name;
        this.type = type;
    }
}
exports.ParamCreateDto = ParamCreateDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "CategoryId is required" }),
    __metadata("design:type", String)
], ParamCreateDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name should not be empty" }),
    (0, class_validator_1.Length)(1, 100, { message: "Name length should be from 1 to 100" }),
    __metadata("design:type", String)
], ParamCreateDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Type should not be empty" }),
    (0, class_validator_1.IsIn)(allowedTypes),
    __metadata("design:type", String)
], ParamCreateDto.prototype, "type", void 0);
