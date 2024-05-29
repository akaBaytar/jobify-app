import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  BarChart,
  Bar as Chart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const Bar = ({ data }) => {
  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={'3 3'} />
        <XAxis dataKey={'date'} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Chart type={'monotone'} dataKey={'count'} fill='#c4b5fd' />
      </BarChart>
    </ResponsiveContainer>
  );
};

Bar.propTypes = {
  data: PropTypes.array,
};

export default Bar;
