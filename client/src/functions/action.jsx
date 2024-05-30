import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import fetch from '../helpers/fetch';

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
export const addJobAction = action('/jobs', 'Job added', '/dashboard');

export const editJobAction = async ({ request, params }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await fetch.patch(`/jobs/${params.id}`, data);
    toast.success(`Job edited successfully.`);
    return redirect(`/dashboard`);
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
      return redirect(`/dashboard`);
    } else {
      return redirect(`/dashboard`);
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const profileAction = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get('avatar');

  if (file && file.size > 500000) {
    toast.error('Image size bigger than 0.5MB');
    return null;
  }

  try {
    await fetch.patch('/user/update', formData);
    toast.success('Profile updated successfully.');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
  }

  return null;
};
