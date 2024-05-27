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
