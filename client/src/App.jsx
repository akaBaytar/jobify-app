import { RouterProvider } from 'react-router-dom';

import router from './router';

import { checkDefaultTheme } from './utilities/darkTheme';

checkDefaultTheme();

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
