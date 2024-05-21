import styled from 'styled-components';

import { Logo, NavLinks } from '../../components';

import { useDashboardContext } from '../../screens/layout/Dashboard';

const Sidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }>
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks sidebar />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;

  @media (width >=992px) {
    display: block;
    box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.1);

    .sidebar-container {
      background: var(--background-secondary-color);
      height: 100%;
      min-height: 100vh;
      width: 16rem;
      margin-inline-start: -16rem;
      transition: margin-inline-start 0.3s ease-in-out;
    }

    .content {
      position: sticky;
      top: 0;
    }

    .show-sidebar {
      margin-inline-start: 0;
    }

    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-inline-start: 2.5rem;
    }

    .nav-links {
      padding-block-start: 2rem;
      display: flex;
      flex-direction: column;
    }

    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding-block: 1rem;
      padding-inline-start: 2.5rem;
      transition: var(--transition);

      &:hover {
        color: var(--primary-500);
        padding-inline-start: 2.6rem;
      }
    }

    .icon {
      font-size: 1.5rem;
      margin-inline-end: 0.5rem;
      display: grid;
      place-items: center;
    }

    .active {
      color: var(--primary-500);
    }
  }
`;

export default Sidebar;
