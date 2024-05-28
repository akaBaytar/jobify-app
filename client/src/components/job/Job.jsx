import PropTypes from 'prop-types';
import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

import styled from 'styled-components';

import { Info } from '../../components';

import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

day.extend(advancedFormat);

const Job = ({ position, company, location, type, createdAt, status }) => {
  const date = day(createdAt).format('DD MM YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <Info icon={<FaLocationArrow />} text={location} />
          <Info icon={<FaCalendarAlt />} text={date} />
          <Info icon={<FaBriefcase />} text={type} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer className='actions'>
          <Link className='button edit-button'>Edit</Link>
          <Form>
            <button type='submit' className='button delete-button'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

Job.propTypes = {
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string,
  createdAt: PropTypes.string,
  status: PropTypes.string,
};

const Wrapper = styled.div``;

export default Job;
