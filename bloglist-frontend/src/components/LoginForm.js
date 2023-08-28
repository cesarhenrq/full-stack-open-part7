import { useDispatch } from 'react-redux';

import useField from '../hooks/useField';

import { login } from '../reducers/userReducer';

const LoginForm = () => {
  const [username, resetUsername] = useField('text');
  const [password, resetPassword] = useField('password');

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

  return (
    <div className="login-form-container">
      <h2>Login to application</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          username
          <input name="username" id="username" {...username} />
        </div>
        <div>
          password
          <input name="password" id="password" {...password} />
        </div>
        <button type="submit" id="login-button">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
