import styled from 'styled-components';

export const UsersContainer = styled.div`
  box-sizing: border-box;

  & > h2 {
    margin: 0;
  }

  & > table {
    border-collapse: collapse;
    border: 1px solid black;
    box-sizing: border-box;
  }

  & > table > thead > tr > th {
    border: 1px solid black;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  & > table > tbody > tr > td {
    border: 1px solid black;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  & > table > tbody > tr > td > a {
    text-decoration: none;
    color: blue;
  }

  & > table > tbody > tr > td > a:hover {
    text-decoration: underline;
  }
`;
