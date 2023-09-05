import styled from 'styled-components';

export const TogglableContainer = styled.div`
  margin: 1rem 0;

  & > div {
    margin: 0.5rem 0;
  }

  & > div:last-child {
    margin-top: 0;
  }

  & > div:first-child {
    margin-bottom: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > div > button {
    margin: 0.5rem 0;
    padding: 0.25rem 0.5rem;
    border: 1px solid black;
    width: 10rem;
    height: 2rem;
    border-radius: 0.25rem;
    background-color: white;
    cursor: pointer;
  }

  & > div > button:hover {
    opacity: 0.5;
  }

  & > div > button {
    background-color: ${({ isVisible }) => (isVisible ? 'red' : 'green')};
    color: white;
  }
`;
