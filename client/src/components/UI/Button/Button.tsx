import s from './Button.module.scss';

type Props = {
   children?: string;
   type: 'submit' | 'button';
};

const Button = ({ children = 'Кнопка', type = 'button' }: Props) => {
   return (
      <button className={s.button} type={type}>
         {children}
      </button>
   );
};

export default Button;
