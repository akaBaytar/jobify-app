import { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';

import { statsQuery } from '../../functions/query';
import { StatsContainer, Charts } from '../../components';

const Stats = () => {
  const { data } = useQuery(statsQuery);

  const { applicationStats, monthlyApplications } = data;

  return (
    <Fragment>
      <StatsContainer stats={applicationStats} />
      {monthlyApplications?.length > 1 && <Charts data={monthlyApplications} />}
    </Fragment>
  );
};

export default Stats;
