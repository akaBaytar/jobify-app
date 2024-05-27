import { redirect } from 'react-router-dom';

import fetch from '../utilities/fetch';

export const dashboardLoader = async () => {
  try {
    const { data } = await fetch.get('/user/me');
    return data;
  } catch (error) {
    return redirect('/');
  }
};
