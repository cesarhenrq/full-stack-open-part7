import { Routes, Route } from 'react-router-dom';

import { useInitializeData } from './hooks';

import { initializeUser } from './reducers/userReducer';

import {
  LoginForm,
  Menu,
  Notification,
  Users,
  Home,
  User,
  Blog,
} from './components';

const App = () => {
  useInitializeData(initializeUser);

  return (
    <div>
      <Notification />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
