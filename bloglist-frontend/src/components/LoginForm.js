import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { useField } from '../hooks';

import { login } from '../reducers/userReducer';

import { LoginFormContainer } from './LoginForm.styles';

const LoginForm = () => {
  const [username, resetUsername] = useField('text');
  const [password, resetPassword] = useField('password');

  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const reset = () => {
    resetUsername();
    resetPassword();
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const credentials = {
      username: username.value,
      password: password.value,
    };

    dispatch(login(credentials));

    reset();
  };

  useEffect(() => {
    user && navigate('/');
  }, [user, navigate]);

  if (user) {
    return null;
  }

  return (
    <LoginFormContainer>
      <h2>Login to application</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input name="username" id="username" {...username} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" id="password" {...password} />
        </div>
        <button type="submit" id="login-button">
          Login
        </button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
