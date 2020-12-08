import request from 'supertest';
import { IRequestsDTO } from '../../src/interfaces/IRequestDTO';
import { app } from '../../src/server';

describe('Reqs', () => {
    test('should get all reqs', async () => {
        const resp = await request(app).get('/reqs');

        expect(resp.status).toBe(200);
    });

    test('should insert a new req', async () => {
        const req: IRequestsDTO = {
            id: 0,
            code: '525651',
            cpf: '483.225.140-69'
        };

        const resp = await request(app).post('/reqs').send(req);

        expect(resp.status).toBe(200);
    });

    test('should update a req', async () => {
        const req: IRequestsDTO = {
            id: 1,
            code: '525651',
            cpf: '483.225.140-69'
        };

        const resp = await request(app).put('/reqs').send(req);

        expect(resp.status).toBe(200);
    });

    test('should delete a req', async () => {
        const req: IRequestsDTO = {
            id: 1,
            code: '525651',
            cpf: '483.225.140-69'
        };

        const resp = await request(app).delete('/reqs').set('id', String(req.id));

        expect(resp.status).toBe(200);
    });
})