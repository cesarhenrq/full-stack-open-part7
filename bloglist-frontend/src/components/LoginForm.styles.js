import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border: 1px solid black;
  border-radius: 5px;
  width: 350px;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 1rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-form .form-group {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
    gap: 0.5rem;
  }

  .login-form input {
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid black;
    width: 100%;
    height: 3rem;
  }

  .login-form button {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    width: 100%;
    cursor: pointer;
    font-size: 1rem;
    height: 3rem;
  }

  .login-form button:hover {
    background-color: black;
    color: white;
  }

  .login-form button:focus {
    outline: none;
  }

  .login-form label {
    font-size: 1rem;
  }

  .login-form input:focus {
    outline: blue solid 2px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
