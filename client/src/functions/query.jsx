import fetch from '../helpers/fetch';

export const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const { data } = await fetch.get('/jobs/stats');

    return data;
  },
};

export const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await fetch.get('/user/me');

    return data;
  },
};

export const jobsQuery = (params) => {
  const { search, status, type, sort, page } = params;

  return {
    queryKey: [
      'jobs',
      search ?? '',
      status ?? 'all',
      type ?? 'all',
      sort ?? 'newest',
      page ?? 1,
    ],

    queryFn: async () => {
      const { data } = await fetch.get('/jobs', { params });

      return data;
    },
  };
};

export const jobQuery = (id) => {
  return {
    queryKey: ['job', id],
    queryFn: async () => {
      const { data } = await fetch.get(`/jobs/${id}`);
      
      return data;
    },
  };
};
