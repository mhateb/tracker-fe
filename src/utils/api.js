import axios from 'axios';

const makeRequest = ({url, type = 'post', baseURL = 'http://localhost:5000/api/v1'}) => (data, query, config) =>
  new Promise((resolve, reject) => {
    axios({
      method: type,
      baseURL,
      url: query
        ? `${url}?${query}`
        : url,
      data: type === 'get'
        ? {}
        : data,
      dataType: 'json',
      responseType: 'json',
      timeout: 30000,
      ...config,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

const api = {
    users: {
        register: (makeRequest({url: '/users/register'})),
        login: (makeRequest({url: '/users/login'})),
        current: (makeRequest({url: '/users/current', type: 'get'}))
    },
    packs: {
        new: (makeRequest({url: '/packs'})),
        all: (makeRequest({url: '/packs/all'})),
        delete: (makeRequest({url: '/packs/delete'})),
        update: (makeRequest({url: '/packs/update'}))
    },
    words: {
        new: (makeRequest({url: '/words'})),
        all: (makeRequest({url: '/words/all'})),
        delete: (makeRequest({url: '/words/delete'})),
        update: (makeRequest({url: '/words/update'}))
    }
};

export default api;
  