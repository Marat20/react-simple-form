import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from '../app.inteface';

interface IProps {
  handleClick: (email: string, password: string) => void;
  title: string;
  btn: string;
}

export const Form: FC<IProps> = ({ handleClick, title, btn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({mode: 'onBlur'});

  const onSubmit: SubmitHandler<IUser> = (data) => {
    handleClick(data.email, data.password);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className='form__title'>{title}</h1>
      <div className='form__group'>
        <input
          className='form__input'
          type='email'
          {...register('email', {
            required: 'invalid email',
            pattern: {
              value:
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
              message: 'Please enter valid email',
            },
          })}
          placeholder='Email'
        />

        {errors?.email && (
          <div className='text-field__message'>{errors.email.message}</div>
        )}
      </div>
      <div className='form__group'>
        <input
          className='form__input'
          type='password'
          {...register('password', {
            required: 'invalid password',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters',
            },
          })}
          placeholder='Password'
        />

        {errors?.password && (
          <div className='text-field__message'>{errors.password.message}</div>
        )}
      </div>
      <div className='form__group'>
        <input
          className='form__input'
          type='tel'
          {...register('phone', {
            pattern: {
              value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
              message: 'Please enter valid phone',
            },
          })}
          placeholder='Phone number'
        />
        {errors?.phone && (
          <div className='text-field__message'>{errors.phone.message}</div>
        )}
      </div>

      <button className='form__button'>{btn}</button>
    </form>
  );
};
