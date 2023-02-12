import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Form } from './Form';

export const SingUp = () => {
  const handleSingUp = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <div className='form'>
      <Form
        handleClick={handleSingUp}
        title='Create an account'
        btn='Create account'
      />
      <div className='form__link'>
        Already have an account? <Link to='/'>Sing in</Link>
      </div>
    </div>
  );
};
