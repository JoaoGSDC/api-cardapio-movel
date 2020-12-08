import { Request, Response } from 'express';
import knex from '../database/connection';

export const index = async (req: Request, res: Response) => {
    let products = await knex('Products').select('*');

    products.map(async product => {
        product.group = await knex('Groups').where('id', '=', product.id_group).select('name').first();
    });

    return res.json(products);
}

export const insert = async (req: Request, res: Response) => {
    const { item } = req.body;

    await knex('Products').insert({ item });

    const products = await knex('Products').select('*');

    return res.json(products);
}

export const update = async (req: Request, res: Response) => {
    const { id, item } = req.body;

    await knex('Products').where('id', '=', id).update({ item: item });

    const products = await knex('Products').select('*');

    return res.json(products);
}

export const delet = async (req: Request, res: Response) => {
    const { id } = req.headers;

    await knex('Products').where('id', id).delete();

    const products = await knex('Products').select('*');

    return res.json(products);
}

export default { index, insert, update, delet }