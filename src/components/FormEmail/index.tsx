import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './FormEmail.module.scss';

const { form, form__input, form__submit } = styles;

const FormEmail: React.FC = () => {
  interface IFormInput {
    email: string;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
    alert("Welcome to the team!");
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
          autoComplete='off'
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
      <button className={form__submit}
        type="submit">Join</button>
    </form>
  );
}

export default FormEmail;
