import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/redux';
import { loginSuccess } from '../../store/reducers/authSlice';
import s from './AuthForm.module.scss';
import Button from '../UI/Button/Button';

interface AuthFormProps {
   mode: 'login' | 'register';
}

interface FormValues {
   email: string;
   password: string;
   confirmPassword: string;
}

export const AuthForm = ({ mode }: AuthFormProps) => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<FormValues>();
   const dispatch = useAppDispatch();
   const onSubmit = (data: FormValues) => {
      if (mode === 'register') {
         console.log('Регистрация');
      } else {
         const fakeToken = btoa(`${data.email}:${data.password}`);
         dispatch(
            loginSuccess({
               token: fakeToken,
               user: { email: data.email, id: '1' },
            })
         );
      }
   };

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h2>{mode === 'login' ? 'Вход' : 'Регистрация'}</h2>
            <div className={s.row}>
               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  id="email"
                  {...register('email', { required: true })}
               />
            </div>
            <div className={s.row}>
               <label htmlFor="password">Пароль:</label>
               <input
                  type="password"
                  id="password"
                  {...register('password', { required: true })}
               />
            </div>
            {mode === 'register' && (
               <div className={s.row}>
                  <label htmlFor="confirmPassword">Повторите пароль:</label>
                  <input
                     type="password"
                     id="confirmPassword"
                     {...register('confirmPassword', {
                        required: true,
                        validate: (value) =>
                           value === watch('password') || 'Пароли не совпадают',
                     })}
                  />
                  {errors.confirmPassword && (
                     <span className={s.error}>
                        {errors.confirmPassword.message}
                     </span>
                  )}
               </div>
            )}
            <Button type="submit">
               {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>
         </form>
      </>
   );
};
