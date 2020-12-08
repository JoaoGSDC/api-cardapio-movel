import request from 'supertest';
import { IGroupsDTO } from '../../src/interfaces/IGroupsDTO';
import { IProductsDTO } from '../../src/interfaces/IProductsDTO';
import { app } from '../../src/server';

describe('Products', () => {
    test('should get all products', async () => {
        const resp = await request(app).get('/products');

        expect(resp.status).toBe(200);
    });

    test('should insert a new product', async () => {
        const group: IGroupsDTO = {
            id: 0,
            group: 'Lanche'
        };

        const product: IProductsDTO = {
            id: 0,
            name: 'Pão de queijo',
            description: 'Pão com queijo mineiro',
            price: 3.00,
            id_group: 1
        };

        await request(app).post('/groups').send(group);
        const resp = await request(app).post('/products').send(product);
        await request(app).delete('/groups').set('id', String(group.id));

        expect(resp.status).toBe(200);
    });

    test('should update a product', async () => {
        const product: IProductsDTO = {
            id: 1,
            name: 'Pão de queijo',
            description: 'Pão com queijo mineiro',
            price: 3.00,
            id_group: 1
        };

        const resp = await request(app).put('/products').send(product);

        expect(resp.status).toBe(200);
    });

    test('should delete a product', async () => {
        const product: IProductsDTO = {
            id: 1,
            name: 'Pão de queijo',
            description: 'Pão com queijo mineiro',
            price: 3.00,
            id_group: 1
        };

        const resp = await request(app).delete('/products').set('id', String(product.id));

        expect(resp.status).toBe(200);
    });
})