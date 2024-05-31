import { createBrowserRouter } from 'react-router-dom';

import {queryClient} from '../helpers/query'

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
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            element: <AddJob />,
            path: 'add-job',
            action: addJobAction,
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader(queryClient),
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: 'delete-job/:id',
            action: deleteJobAction,
          },
        ],
      },
    ],
  },
]);

export default router;
