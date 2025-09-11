import { Link } from 'react-router';
import Button from '../components/Button';
import Lottie from 'lottie-react';
import Animation from '../assets/Animation.json';

const ErrorPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Lottie animationData={Animation} style={{ height: '300px' }} />
      <Link to='/'>
        <Button label='Go to Home' type='primary'></Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
