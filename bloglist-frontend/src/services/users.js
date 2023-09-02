import axios from 'axios';

const baseUrl = '/api/users';

const getAll = async () => {
  const request = await axios.get(baseUrl);

  return request.data;
};

const userService = { getAll };

export default userService;