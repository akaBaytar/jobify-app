import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import fetch from '../helpers/fetch';
import { jobQuery, jobsQuery, statsQuery, userQuery } from './query';

export const dashboardLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/');
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

export const allJobsLoader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(jobsQuery(params));

    try {
      return { searchValues: { ...params } };
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

export const editJobLoader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(jobQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect('/dashboard');
    }
  };
