import PropTypes from 'prop-types';
import { Link, Form } from 'react-router-dom';
import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';

import styled from 'styled-components';

import { Info } from '../../components';

import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

day.extend(advancedFormat);

const Job = ({ _id, position, company, location, type, createdAt, status }) => {
  const date = day(createdAt).format('DD.MM.YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
        <div className='actions'>
          <Link to={`../edit-job/${_id}`} className='button edit-button'>
            <FaEdit />
          </Link>
          <Form method='post' action={`../delete-job/${_id}`}>
            <button type='submit' className='button delete-button'>
              <FaTrash />
            </button>
          </Form>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <Info icon={<FaLocationArrow />} text={location} />
          <Info icon={<FaCalendarAlt />} text={date} />
          <Info icon={<FaBriefcase />} text={type} />
          <div className={`status ${status}`}>{status}</div>
        </div>
      </div>
    </Wrapper>
  );
};

Job.propTypes = {
  _id: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string,
  createdAt: PropTypes.string,
  status: PropTypes.string,
};

const Wrapper = styled.article`
  background-color: var(--background-secondary-color);
  border-radius: var(--border-radius);
  border: 1px solid rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }

  .main-icon {
    width: 4rem;
    height: 4rem;

    display: grid;
    place-items: center;
    margin-inline-end: 1.5rem;

    background-color: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--white);
  }

  h5 {
    margin-block-end: 0.25rem;
  }

  p {
    margin: 0;
    text-transform: capitalize;
    color: var(--text-secondary-color);
    font-weight: 600;
  }

  .content {
    padding: 1rem;
  }

  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    align-items: center;
    margin-block: 1rem;

    @media (width >= 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;

    width: 6.9rem;
    height: 2rem;
    font-size: 0.85rem;

    display: grid;
    place-items: center;
  }

  .actions {
    display: flex;
    align-items: center;
  }

  .button {
    height: 2rem;
    width: 2rem;

    font-size: 0.75rem;

    display: grid;
    place-items: center;

    padding: 0;
  }

  .edit-button {
    margin-inline-end: 0.5rem;
    padding-inline-start: 0.25rem;
  }
`;

export default Job;
