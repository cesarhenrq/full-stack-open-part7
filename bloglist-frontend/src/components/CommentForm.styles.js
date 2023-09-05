import styled from 'styled-components';

export const CommentFormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > form > input {
    height: 2rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  & > form > button {
    width: 10rem;
    height: 2rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    background-color: blue;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-sizing: border-box;
  }
`;
