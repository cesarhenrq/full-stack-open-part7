import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgrey;
  padding: 0.5rem;
  gap: 0.5rem;

  & > a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  & > a:hover {
    color: darkgrey;
  }

  & > button {
    background-color: white;
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-weight: bold;
    width: 5rem;
    cursor: pointer;
  }

  & > button:hover {
    background-color: grey;
  }
`;
