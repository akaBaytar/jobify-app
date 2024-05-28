import { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Search, Jobs } from '../../components';

export const JobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData();

  return (
    <JobsContext.Provider value={{ data }}>
      <Search />
      <Jobs />
    </JobsContext.Provider>
  );
};

export default AllJobs;
