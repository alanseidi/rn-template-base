import api from './api';

export const exampleGet = () => {
  return api.get(`/example`);
};
export const examplePost = () => {
  return api.post(`/example`,{});
};
