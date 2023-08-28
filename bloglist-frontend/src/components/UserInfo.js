import { useSelector } from 'react-redux';

const UserInfo = () => {
  const user = useSelector((state) => state.user);

  return <div>{user.name} logged in</div>;
};

export default UserInfo;
