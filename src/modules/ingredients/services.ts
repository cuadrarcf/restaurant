import { service } from '../../app/services';

const servicesApi = {
  list: () =>
    service
      .get('/items')
      .then(response => response.data)
      .catch(error => error),
  create: (payload: any) =>
    service
      .post('/items', payload)
      .then(response => response.data)
      .catch(error => error),
  update: (id: any, payload: any) =>
    service
      .patch(`/items/${id}`, payload)
      .then(response => response.data)
      .catch(error => error),
  delete: (id: any) =>
    service
      .delete(`/items/${id}`)
      .then(response => response.data)
      .catch(error => error)
};

export default servicesApi;
