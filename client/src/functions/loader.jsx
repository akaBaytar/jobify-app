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

export const allJobsLoader = async () => {
  try {
    const { data } = await fetch.get('/jobs');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
