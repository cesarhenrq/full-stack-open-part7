import { Routes, Route } from 'react-router-dom';

import { useInitializeData } from './hooks';

import { initializeUser } from './reducers/userReducer';

import {
  LoginForm,
  BaseLayout,
  Notification,
  Users,
  Home,
  User,
} from './components';

const App = () => {
  useInitializeData(initializeUser);

  return (
    <div>
      <Notification />
      <BaseLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
