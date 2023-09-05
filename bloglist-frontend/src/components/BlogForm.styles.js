import styled from 'styled-components';

export const BlogFormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > h2 {
    margin: 0;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > form > .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & > form > .form-group > label {
    margin: 0;
  }

  & > form > .form-group > input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    height: 1rem;
  }

  & > form > button {
    height: 2rem;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 0.25rem;
    background-color: white;
  }

  & > form > button:hover {
    opacity: 0.5;
  }
`;
