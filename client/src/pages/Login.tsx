import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import { AuthForm } from '../components/AuthForm/AuthForm';

type LoginForm = {
   email: string;
   password: string;
};

const Login = () => {
   // const { register, handleSubmit } = useForm<LoginForm>();
   const onSubmit = (data: LoginForm) => {
      console.log(`Login data: ${data}`);
   };
   return (
      <AuthForm mode="login" />
      // <form className={styles.form}>
      //    <h2>Вход</h2>
      //    <div className={styles.field}>
      //       <label className={styles.label} htmlFor="email">
      //          Email:
      //       </label>
      //       <input
      //          type="email"
      //          id="email"
      //          {...register('email', { required: true })}
      //       />
      //    </div>
      //    <div className={styles.field}>
      //       <label className={styles.label} htmlFor="password">
      //          Пароль:
      //       </label>
      //       <input
      //          type="password"
      //          id="password"
      //          {...register('password', { required: true })}
      //       />
      //    </div>

      //    <button type="submit" className="">
      //       Войти
      //    </button>
      // </form>
   );
};

export default Login;
