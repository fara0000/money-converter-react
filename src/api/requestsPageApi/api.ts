import axios from 'axios';

const url = 'http://intravision-task.test01.intravision.ru';

export const getTenantsKey = () => {
    return axios.get(`${url}/api/Tenants`)
        .then(response => response.data)
        .catch(error => console.log('getTenantsKey api', error));
};