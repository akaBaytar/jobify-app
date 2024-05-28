import PropTypes from 'prop-types';
import styled from 'styled-components';

const Info = ({ icon, text }) => {
  return (
    <Wraper>
      <span className='job-icon'>{icon}</span>
      <span className='job-text'>{text}</span>
    </Wraper>
  );
};

Info.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
};

const Wraper = styled.div``;

export default Info;
