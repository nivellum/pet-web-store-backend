import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';


export const ValidationMiddleware = <T extends Object>(type: new (...args: any) => T) => function(req: Request, res: Response, next: NextFunction) {

    const dto: T = plainToInstance(type, <object>req.body);

    validate(dto).then(errors => {

        if (errors.length > 0) {
            res.status(400).json(errors.map(x => { return { property: x.property, errors: (<any>Object).values(x.constraints) } }));
            return;
        }

        next();
    });
}
