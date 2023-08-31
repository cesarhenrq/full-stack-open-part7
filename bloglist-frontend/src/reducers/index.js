import userReducer from './userReducer';
import blogsReducer from './blogsReducer';
import notificationReducer from './notificationReducer';
import usersReducer from './usersReducer';

const reducer = {
  user: userReducer,
  blogs: blogsReducer,
  notification: notificationReducer,
  users: usersReducer,
};

export default reducer;
