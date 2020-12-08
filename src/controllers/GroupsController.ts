import { Request, Response } from 'express';
import knex from '../database/connection';

export const index = async (req: Request, res: Response) => {
    const groups = await knex('Groups').select('*');

    return res.json(groups);
}

export const insert = async (req: Request, res: Response) => {
    const { group } = req.body;

    await knex('Groups').insert({ group });

    const groups = await knex('Groups').select('*');

    return res.json(groups);
}

export const update = async (req: Request, res: Response) => {
    const { id, group } = req.body;

    await knex('Groups').where('id', '=', id).update({ group });

    const groups = await knex('Groups').select('*');

    return res.json(groups);
}

export const delet = async (req: Request, res: Response) => {
    const { id } = req.headers;

    await knex('Groups').where('id', id).delete();

    const groups = await knex('Groups').select('*');

    return res.json(groups);
}

export default { index, insert, update, delet }