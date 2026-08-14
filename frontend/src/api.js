const BASE = import.meta.env.VITE_API_BASE || '/api';

async function request(path, options = {}) {
  const response = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.status === 204 ? null : response.json();
}

export const getHealth = () => request('/health/');

export const getTodos = () => request('/todos/');

export const createTodo = (data) => request('/todos/', {
  method: 'POST',
  body: JSON.stringify(data),
});

export const updateTodo = (id, data) => request(`/todos/${id}/`, {
  method: 'PATCH',
  body: JSON.stringify(data),
});

export const deleteTodo = (id) => request(`/todos/${id}/`, {
  method: 'DELETE',
});

export default request;
