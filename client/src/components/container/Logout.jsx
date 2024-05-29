import { useState } from 'react';
import { LiaUser } from 'react-icons/lia';
import { RiArrowDropDownLine } from 'react-icons/ri';

import styled from 'styled-components';

import { useDashboardContext } from '../../hooks';

const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);

  const { user, logout } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type='button'
        className='button logout-button'
        onClick={() => setShowLogout(!showLogout)}>
        {user.avatar ? (
          <img src={user.avatar} alt='avatar' className='image' />
        ) : (
          <LiaUser />
        )}
        <span>{user?.name}</span>
        <RiArrowDropDownLine />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-button' onClick={logout}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .logout-button {
    font-size: 1.2rem;
    display: flex;
    height: 1.8rem;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    color: var(--white);
    background-color: var(--primary-500);

    & span {
      font-size: 0.9rem;
    }
  }

  .image {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }

  .dropdown {
    position: absolute;
    top: 1.9rem;
    left: 0;
    width: 100%;
    height: 1.8rem;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }

  .show-dropdown {
    visibility: visible;
  }

  .dropdown-button {
    height: 100%;
    width: 100%;
    font-size: 0.9rem;
    border-radius: var(--border-radius);
    padding: 0.25rem;
    color: var(--white);
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    display: grid;
    place-items: center;
  }
`;

export default Logout;
