import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

const useInitializeData = (actionCreator) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator());
  }, [dispatch, actionCreator]);
};

export default useInitializeData;
