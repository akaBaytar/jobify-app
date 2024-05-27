import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import fetch from '../utilities/fetch';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await fetch.post('/auth/register', data);
    toast.success('Register successfully.');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
