import { useContext } from 'react';
import { JobsContext } from '../screens/private/AllJobs';
import { DashboardContext } from '../screens/layout/Dashboard';

export const useJobsContext = () => useContext(JobsContext);
export const useDashboardContext = () => useContext(DashboardContext);
