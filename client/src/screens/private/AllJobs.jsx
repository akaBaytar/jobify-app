import { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Search, Jobs } from '../../components';
import { jobsQuery } from '../../functions/query';

export const JobsContext = createContext();

const AllJobs = () => {
  const { searchValues } = useLoaderData();

  const { data } = useQuery(jobsQuery(searchValues));

  return (
    <JobsContext.Provider value={{ data, searchValues }}>
      <Search />
      <Jobs />
    </JobsContext.Provider>
  );
};

export default AllJobs;
