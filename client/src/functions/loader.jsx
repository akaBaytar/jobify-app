import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import fetch from '../helpers/fetch';
import { statsQuery,userQuery } from './query';

export const dashboardLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/');
  }
};

export const allJobsLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await fetch.get('/jobs', { params });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const editJobLoader = async ({ params }) => {
  const { id } = params;

  try {
    const { data } = await fetch.get(`/jobs/${id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
};

export const adminLoader = async () => {
  try {
    const { data } = await fetch.get('/user/admin/app-stats');
    return data;
  } catch (error) {
    toast.error('You are not authorized.');
    return redirect('/dashboard');
  }
};

export const statsLoader = (queryClient) => async () => {
  return await queryClient.ensureQueryData(statsQuery);
};
