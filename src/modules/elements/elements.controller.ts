import { Response, NextFunction } from "express";
import { Request } from 'express-validation';
import * as ElementsService from './elements.service';

const conf = global.conf;
const log = global.log.module('elements');

/*async function tryAPI(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const page = req.query.page ? Number.parseInt(req.query.page) : 0;
		const size = req.query.pageSize ? Number.parseInt(req.query.pageSize) : 0;
		const stream = await ElementsService.findAll(page, size);

		res.setHeader('Content-Type', 'application/json');
		stream
        .pipe(JSONStream.stringify())
        .pipe(res.type('json'))
    } catch (err) {
        next(err);
    }
}
*/
async function tryAPI(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        
        return res.json({response: 'ok'});
    } catch (err) {
        next(err);
    }
}

export {
    tryAPI
}