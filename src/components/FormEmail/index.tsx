import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './FormEmail.module.scss';

const { form, form__input, submit, submit__button, submit__icon } = styles;

const FormEmail: React.FC = () => {
  interface IFormInput {
    email: string;
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
    alert("Welcome to the team!");
    reset();
  };

  const onError = () => {
    if (errors.email) {
      alert('Email is invalid');
    }
  };

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit, onError)}>
      <div>
        <input 
          className={form__input}
          id="email"
          type="text"
          autoComplete="off"
          placeholder="Email"
          {...register('email', {
            required: 'Email is invalid',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Email is invalid'
            }
          })}
        />
      </div>
      <div className={submit}>
        <button className={submit__button} type="submit">Join</button>
        <svg className={submit__icon} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_45_207)">
            <path d="M2.1875 7H11.8125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.875 3.0625L11.8125 7L7.875 10.9375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_45_207">
          <rect width="14" height="14" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
    </form>
  );
}

export default FormEmail;
