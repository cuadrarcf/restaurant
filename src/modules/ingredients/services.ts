import Axios from 'axios';

const service = ()=> Axios;

const servicesApi = {
  list: () =>
    service()
      .get('/appattributes')
      .then(response => response.data)
      .catch(error => error),
  create: (payload: any) =>
    service()
      .post('/appattributes', payload)
      .then(response => response.data)
      .catch(error => error),
  update: (id: any, payload: any) =>
    service()
      .patch(`/appattributes/${id}`, payload)
      .then(response => response.data)
      .catch(error => error),
  delete: (id: any) =>
    service()
      .delete(`/appattributes/${id}`)
      .then(response => response.data)
      .catch(error => error),
};

export default servicesApi;
