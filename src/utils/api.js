import axios from 'axios';

const apiUrl = process.env.NODE_ENV === "development" ? "http://localhost:5000/api/v1" : "https://tracker-be.herokuapp.com/api/v1"

console.log(apiUrl)

const makeRequest = ({url, type = 'post', baseURL = apiUrl}) => (data, query, config) =>
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
        if (error.status === 401) {
          localStorage.clear()
          window.location('/login')
        }
        reject(error.response);
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
        all: (makeRequest({url: '/packs', type: 'get'})),
        delete: (makeRequest({url: '/packs', type: 'delete'})),
        update: (makeRequest({url: '/packs', type: 'update'}))
    },
    words: {
        new: (makeRequest({url: '/words/new'})),
        all: (makeRequest({url: '/words'})),
        delete: (makeRequest({url: '/words'})),
        update: (makeRequest({url: '/words'}))
    }
};

export default api;
  