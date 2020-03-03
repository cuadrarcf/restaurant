import Axios from 'axios';

import { items } from './items';
import { orders } from './orders';
import { recipes } from './recipes';

const service = Axios.create({
  baseURL: 'https://demo5544737.mockable.io',
  timeout: 10000,
  headers: {
    accept: 'application/json'
  }
});

export { items, orders, recipes, service };
