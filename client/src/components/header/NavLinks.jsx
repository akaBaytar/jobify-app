import { NavLink } from 'react-router-dom';

import { LINKS } from '../../utilities/Links';
import { useDashboardContext } from '../../screens/layout/Dashboard';

const NavLinks = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <div className='nav-links'>
      {LINKS.map(({ text, path, icon }) => (
        <NavLink
          to={path}
          key={text}
          className={'nav-link'}
          onClick={toggleSidebar}
          end>
          <span className='icon'>{icon}</span>
          {text}
        </NavLink>
      ))}
    </div>
  );
};
export default NavLinks;
