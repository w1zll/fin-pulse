import { Link } from 'react-router-dom';

const NotFoundPage = () => {
   return (
      <>
         <h1>404. Страница с данным адресом отсутствует</h1>
         <Link to="/">На главную</Link>
      </>
   );
};

export default NotFoundPage;
