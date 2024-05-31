import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import fetch from '../helpers/fetch';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await fetch.post('/auth/register', data);
    toast.success('Registered successfully.');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const loginAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);

    try {
      await fetch.post('/auth/login', data);

      toast.success('Logged in successfully.');

      queryClient.invalidateQueries();

      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

export const profileAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();

    const file = formData.get('avatar');

    if (file && file.size > 500000) {
      toast.error('Image size bigger than 0.5MB');
      return null;
    }

    try {
      await fetch.patch('/user/update', formData);

      toast.success('Profile updated successfully.');

      queryClient.invalidateQueries(['user']);

      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

export const addJobAction = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await fetch.post('/jobs', data);
    toast.success('Job added successfully.');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

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
