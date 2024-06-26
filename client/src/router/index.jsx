import { createBrowserRouter } from 'react-router-dom';

import { queryClient } from '../helpers/query';

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
  deleteJobAction,
  profileAction,
} from '../functions/action';

import {
  dashboardLoader,
  allJobsLoader,
  editJobLoader,
  adminLoader,
  statsLoader,
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
        action: loginAction(queryClient),
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AllJobs />,
            loader: allJobsLoader(queryClient),
          },
          {
            element: <AddJob />,
            path: 'add-job',
            action: addJobAction(queryClient),
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader(queryClient),
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction(queryClient),
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader(queryClient),
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader(queryClient),
            action: editJobAction(queryClient),
          },
          {
            path: 'delete-job/:id',
            action: deleteJobAction(queryClient),
          },
        ],
      },
    ],
  },
]);

export default router;
