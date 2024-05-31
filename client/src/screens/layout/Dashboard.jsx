import { useState, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styled from 'styled-components';

import fetch from '../../helpers/fetch';
import { userQuery } from '../../functions/query';
import { queryClient } from '../../helpers/query';
import { Modal, Sidebar, Navbar } from '../../components';
import { checkDefaultTheme } from '../../utilities/darkTheme';

export const DashboardContext = createContext();

const Dashboard = () => {
  const { user } = useQuery(userQuery).data;

  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const dark = !darkTheme;
    setDarkTheme(dark);
    localStorage.setItem('darkTheme', dark);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logout = async () => {
    navigate('/');
    await fetch.get('/auth/logout');
    queryClient.invalidateQueries();
    toast.info('Logged out successfully.');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        darkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logout,
      }}>
      <Wrapper>
        <main className='dashboard'>
          <Modal />
          <Sidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }

  .dashboard-page {
    width: 90vw;
    margin-inline: auto;
    padding-block: 2rem;
  }

  @media (width >= 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }

    .dashboard-page {
      width: 90%;
    }
  }
`;

export default Dashboard;
