import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
   const location = useLocation();
   return (
      <header className={styles.header}>
         <Link className={styles.logo} to="/">
            ФинПульс
         </Link>
         <nav>
            <Link
               to="/"
               className={location.pathname === '/' ? styles.active : ''}
            >
               Главная
            </Link>
            <Link
               to="login"
               className={location.pathname === '/login' ? styles.active : ''}
            >
               Вход
            </Link>
            <Link
               to="register"
               className={
                  location.pathname === '/register' ? styles.active : ''
               }
            >
               Регистрация
            </Link>
         </nav>
      </header>
   );
};

export default Header;
