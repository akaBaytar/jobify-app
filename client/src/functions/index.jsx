import { redirect } from 'react-router-dom';

import fetch from '../utilities/fetch';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await fetch.post('/auth/register', data);
    return redirect('/login');
  } catch (error) {
    return error;
  }
};
