import axios from 'axios';
const baseUrl = '/api/blogs';

const getAll = async () => {
  const request = await axios.get(baseUrl);

  return request.data;
};

const create = async (blog, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const request = await axios.post(baseUrl, blog, config);

  return request.data;
};

const update = async (blog, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const request = await axios.put(`${baseUrl}/${blog.id}`, blog, config);

  return request.data;
};

const remove = async (blog, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  await axios.delete(`${baseUrl}/${blog.id}`, config);
};

const addComment = async (blog, comment, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const request = await axios.post(
    `${baseUrl}/${blog.id}/comments`,
    { comment },
    config,
  );

  return request.data;
};

const blogService = { getAll, create, update, remove, addComment };

export default blogService;
