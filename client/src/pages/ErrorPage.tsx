import { Link } from 'react-router';
import Button from '../component/ui/Button';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const ErrorPage = () => {
    const [animationData, setAnimationData] = useState<unknown>(null);

    useEffect(() => {
      import('../assets/Animation.json').then((data) => {
        setAnimationData(data.default);
      });
    }, []);

    if (!animationData) return <div>Loading...</div>;
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Lottie animationData={animationData} renderer='svg' style={{ height: '300px' }} />
      <Link to='/'>
        <Button label='Go to Home' type='primary'></Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
