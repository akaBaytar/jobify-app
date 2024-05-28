import { createBrowserRouter } from 'react-router-dom';

import {
  Home,
  Landing,
  Register,
  Login,
  Dashboard,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from '../screens';

import {
  registerAction,
  loginAction,
  addJobAction,
  editJobAction,
} from '../functions/action';

import {
  dashboardLoader,
  allJobsLoader,
  editJobLoader,
} from '../functions/loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
        ],
      },
    ],
  },
]);

export default router;
