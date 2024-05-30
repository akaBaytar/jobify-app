import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import fetch from '../utilities/fetch';

export const dashboardLoader = async () => {
  try {
    const { data } = await fetch.get('/user/me');
    return data;
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
    return redirect('/dashboard/all-jobs');
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

export const statsLoader = async () => {
  try {
    const { data } = await fetch.get('/jobs/stats');
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
