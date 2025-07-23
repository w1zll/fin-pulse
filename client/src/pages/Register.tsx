import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import { AuthForm } from '../components/AuthForm/AuthForm';

type RegisterForm = {
   email: string;
   password: string;
   confirmPassword: string;
};

const Register = () => {
   // const { register, handleSubmit, watch } = useForm<RegisterForm>();

   // const onSubmit = (data: RegisterForm) => {
   //    console.log(`Register data: ${data}`);
   //    // TODO: Добавить проверку совпадения паролей
   // };
   return (
      <>
         <AuthForm mode="register" />
         {/* <form className={styles.form}>
            <h2>Регистрация</h2>
            <div className={styles.field}>
               <label htmlFor="email" className={styles.label}>
                  Email:
               </label>
               <input
                  type="email"
                  id="email"
                  {...register('email', { required: true })}
               />
            </div>
            <div className={styles.field}>
               <label htmlFor="password" className={styles.label}>
                  Пароль:
               </label>
               <input
                  type="password"
                  id="password"
                  {...register('password', { required: true })}
               />
            </div>
            <div className={styles.field}>
               <label htmlFor="confirmPassword" className={styles.label}>
                  Повторите пароль:
               </label>
               <input
                  type="password"
                  id="confirmPassword"
                  {...register('confirmPassword', { required: true })}
               />
            </div>

            <button type="submit" className="">
               Зарегистрироваться
            </button>
         </form>
         <nav>
            <a href="/">ABOBA</a>
         </nav> */}
      </>
   );
};

export default Register;
