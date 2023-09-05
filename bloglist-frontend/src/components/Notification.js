import { useSelector } from 'react-redux';

import { NotificationContainer } from './Notification.styles';

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  console.log('notification', notification);

  return (
    <NotificationContainer
      type={notification ? notification.type : null}
      display={notification ? '' : 'none'}
    >
      {notification ? notification.message : null}
    </NotificationContainer>
  );
};

export default Notification;
