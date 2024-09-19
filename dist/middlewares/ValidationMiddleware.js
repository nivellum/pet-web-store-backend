"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationMiddleware = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const ValidationMiddleware = (type) => function (req, res, next) {
    const dto = (0, class_transformer_1.plainToInstance)(type, req.body);
    (0, class_validator_1.validate)(dto).then(errors => {
        if (errors.length > 0) {
            res.status(400).json(errors.map(x => { return { property: x.property, errors: Object.values(x.constraints) }; }));
            return;
        }
        next();
    });
};
exports.ValidationMiddleware = ValidationMiddleware;
