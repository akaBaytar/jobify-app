import styled from 'styled-components';

import LOGO from '../../assets/images/logo.png';

const Logo = () => {
  return <Image src={LOGO} alt='Jobify - Job Tracker App' />;
};

const Image = styled.img`
  height: 3.5rem;
`;

export default Logo;
