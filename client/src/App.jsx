import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import router from './router';
import { checkDefaultTheme } from './utilities/darkTheme';
import {queryClient} from './helpers/query'

checkDefaultTheme();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
