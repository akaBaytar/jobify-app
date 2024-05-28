import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import fetch from '../utilities/fetch';

const action =
  (path, message, route) =>
  async ({ request }) => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);

    try {
      await fetch.post(path, data);
      toast.success(`${message} successfully.`);
      return redirect(route);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

export const registerAction = action('/auth/register', 'Register', '/login');
export const loginAction = action('/auth/login', 'Login', '/dashboard');
export const addJobAction = action('/jobs', 'Job added', 'all-jobs');

export const editJobAction = async ({ request, params }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await fetch.patch(`/jobs/${params.id}`, data);
    toast.success(`Job edited successfully.`);
    return redirect(`/dashboard/all-jobs`);
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const deleteJobAction = async ({ request, params }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    if (window.confirm('Are you sure you want to delete the job?')) {
      await fetch.delete(`/jobs/${params.id}`, data);
      toast.success(`Job deleted successfully.`);
      return redirect(`/dashboard/all-jobs`);
    } else {
      return redirect(`/dashboard/all-jobs`);
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
