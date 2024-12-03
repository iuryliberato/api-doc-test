import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export const validate = (schema: ZodType<unknown>) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (err: any) {
        res.status(400).json({
            message: 'Validation error',
            errors: err.errors, // Zod provides detailed error information
        });
    }
};
