import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

import { Logo, NavLinks } from '../../components';
import { useDashboardContext } from '../../screens/layout/Dashboard';

const Modal = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'modal-container show-modal' : 'modal-container'
        }>
        <div className='content'>
          <button type='button' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
            <NavLinks />
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (width >=992px) {
    display: none;
  }

  .logo {
    width: 100px;
    object-fit: contain;
  }

  .modal-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .show-modal {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }

  .content {
    height: 90vh;
    width: var(--fluid-width);
    border-radius: var(--border-radius);
    background: var(--background-secondary-color);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    position: absolute;
    top: 12px;
    left: 12px;
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--primary-500);
  }

  .nav-links {
    padding-block-start: 2rem;
    padding-inline-start: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding-block: 1rem;
    transition: var(--transition);

    &:hover {
      color: var(--primary-500);
    }

    .icon {
      font-size: 1.5rem;
      margin-inline-end: 0.5rem;
      display: grid;
      place-items: center;
    }
  }

  .active {
    color: var(--primary-500);
  }
`;

export default Modal;
