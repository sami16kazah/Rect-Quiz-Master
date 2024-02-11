import { useEffect } from 'react';
import Button from './Button';

function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return <Button content={`${mins} : ${seconds}`}> </Button>;
}

export default Timer;
