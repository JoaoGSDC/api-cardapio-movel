import express from 'express';

import ProductsController from './controllers/ProductsController';
import RequestsController from './controllers/RequestsController';
import GroupsController from './controllers/GroupsController';

const routes = express.Router();

const products = ProductsController;
const requests = RequestsController;
const groups = GroupsController;

routes.get('/products', products.index);
routes.post('/products', products.insert);
routes.put('/products', products.update);
routes.delete('/products', products.delet);

routes.get('/requests', requests.index);
routes.post('/requests', requests.insert);
routes.put('/requests', requests.update);
routes.delete('/requests', requests.delet);

routes.get('/groups', groups.index);
routes.post('/groups', groups.insert);
routes.put('/groups', groups.update);
routes.delete('/groups', groups.delet);

export default routes;