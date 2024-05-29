import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  AreaChart,
  Area as Chart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const Area = ({ data }) => {
  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={'3 3'} />
        <XAxis dataKey={'date'} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Chart
          type={'monotone'}
          dataKey={'count'}
          stroke='#8b5cf6'
          fill='#c4b5fd'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

Area.propTypes = {
  data: PropTypes.array,
};

export default Area;
