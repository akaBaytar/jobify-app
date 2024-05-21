import styled from 'styled-components';
import { useDashboardContext } from '../../screens/layout/Dashboard';

const Modal = () => {
  const data = useDashboardContext();
  console.log(data);
  return <Wrapper>Modal</Wrapper>;
};

const Wrapper = styled.section``;

export default Modal;
