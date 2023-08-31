import { Routes, Route } from 'react-router-dom';

import { initializeUser } from './reducers/userReducer';
import { initializeUsers } from './reducers/usersReducer';
import { initializeBlogs } from './reducers/blogsReducer';

import { useInitializeData } from './hooks';

import { LoginForm, BaseLayout, Notification, Users, Home } from './components';

const App = () => {
  useInitializeData(initializeUser);
  useInitializeData(initializeUsers);
  useInitializeData(initializeBlogs);

  return (
    <div>
      <Notification />
      <BaseLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
