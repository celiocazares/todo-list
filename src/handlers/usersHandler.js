import { prefixApi } from '../helpers/prefixApi';
import { apiHelpers } from '../helpers/apiHelpers';

export const usersHandler = {
  getAll,
  getById,
  insert,
  update,
  deleteUser
};

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: apiHelpers.authHeader()
  };
  return fetch(`${prefixApi()}/user`, requestOptions).then(response => response.json());
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: apiHelpers.authHeader()
  };
  return fetch(`${prefixApi()}/user/${id}`, requestOptions).then(response => response.json());
}

function insert(params) {
  const requestOptions = {
    method: 'POST',
    headers: { ...apiHelpers.authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  };
  return fetch(`${prefixApi()}/user`, requestOptions).then(response => response.json());
}

function update(params) {
  debugger
  const requestOptions = {
    method: 'PUT',
    headers: { ...apiHelpers.authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  };
  return fetch(`${prefixApi()}/user/${params.public_id}`, requestOptions).then(response => response.json());
}

function deleteUser(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: apiHelpers.authHeader()
  };
  return fetch(`${prefixApi()}/user/${id}`, requestOptions).then(response => response.json());
}