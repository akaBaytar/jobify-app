import fetch from '../helpers/fetch';

export const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await fetch.get('/jobs/stats');
    return response.data;
  },
};

export const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const response = await fetch.get('/user/me');
    return response.data;
  },
};
