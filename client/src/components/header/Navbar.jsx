import styled from 'styled-components';
import { FaAlignLeft } from 'react-icons/fa';

import { Logo } from '../../components';
import { useDashboardContext } from '../../screens/layout/Dashboard';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4>Dashboard</h4>
        </div>
        <div className='button-container'>toggle/logout</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  h4 {
    display: none;
  }

  .button-container {
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 100px;
    object-fit: contain;
  }

  @media (width >=992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }

    .logo {
      display: none;
    }

    h4 {
      display: block;
    }
  }
`;

export default Navbar;
