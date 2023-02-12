import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from './Form';

export const SingIn = () => {
  const navigate = useNavigate();
  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/profile');
      })
      .catch(console.error);
  };
  return (
    <div className='form'>
      <Form handleClick={handleSignIn} title='Sign in' btn='Enter' />
      <div className='form__link'>
        Don't have an account? <Link to='/singup'>Sing Up</Link>
      </div>
    </div>
  );
};
