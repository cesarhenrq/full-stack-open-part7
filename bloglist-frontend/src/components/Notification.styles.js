import styled from 'styled-components';

export const NotificationContainer = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 100vw;
  text-align: center;
  background-color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: 0.5;
  display: ${({ display }) => display};
  z-index: 1;
  color: white;
`;
