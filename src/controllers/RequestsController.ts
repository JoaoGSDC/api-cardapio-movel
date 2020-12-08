import { Request, Response } from 'express';
import knex from '../database/connection';

export const index = async (req: Request, res: Response) => {
    const requests = await knex('Requests').select('*');

    return res.json(requests);
}

export const insert = async (req: Request, res: Response) => {
    const { code, cpf } = req.body;

    await knex('Requests').insert({ code, cpf });

    const requests = await knex('Requests').select('*');

    return res.json(requests);
}

export const update = async (req: Request, res: Response) => {
    const { id, code, cpf } = req.body;

    await knex('Requests').where('id', '=', id).update({ code, cpf });

    const requests = await knex('Requests').select('*');

    return res.json(requests);
}

export const delet = async (req: Request, res: Response) => {
    const { id } = req.headers;

    await knex('Requests').where('id', id).delete();

    const requests = await knex('Requests').select('*');

    return res.json(requests);
}

export default { index, insert, update, delet }