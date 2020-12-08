import request from 'supertest';
import { IGroupsDTO } from '../../src/interfaces/IGroupsDTO';
import { app } from '../../src/server';

describe('Groups', () => {
    test('should get all groups', async () => {
        const resp = await request(app).get('/groups');

        expect(resp.status).toBe(200);
    });

    test('should insert a new group', async () => {
        const group: IGroupsDTO = {
            id: 0,
            group: 'Lanche'
        };

        const resp = await request(app).post('/groups').send(group);

        expect(resp.status).toBe(200);
    });

    test('should update a group', async () => {
        const group: IGroupsDTO = {
            id: 0,
            group: 'Lanche'
        };

        const resp = await request(app).put('/groups').send(group);

        expect(resp.status).toBe(200);
    });

    test('should delete a group', async () => {
        const group: IGroupsDTO = {
            id: 0,
            group: 'Lanche'
        };

        const resp = await request(app).delete('/groups').set('id', String(group.id));

        expect(resp.status).toBe(200);
    });
})