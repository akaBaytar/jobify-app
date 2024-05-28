import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { LINKS } from '../../utilities/Links';
import { useDashboardContext } from '../../hooks';

const NavLinks = ({ sidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className='nav-links'>
      {LINKS.map(({ text, path, icon }) => {
        const { role } = user;

        if (path === 'admin' && role !== 'admin') return;

        return (
          <NavLink
            to={path}
            key={text}
            className={'nav-link'}
            onClick={sidebar ? null : toggleSidebar}
            end>
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

NavLinks.propTypes = {
  sidebar: PropTypes.bool,
};

export default NavLinks;
