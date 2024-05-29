import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

import { StatsContainer, Charts } from '../../components';

const Stats = () => {
  const { applicationStats, monthlyApplications } = useLoaderData();

  return (
    <Fragment>
      <StatsContainer stats={applicationStats} />
      {monthlyApplications?.length > 1 && <Charts data={monthlyApplications} />}
    </Fragment>
  );
};

export default Stats;
