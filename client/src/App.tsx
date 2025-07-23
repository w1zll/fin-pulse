import Home from './pages/Home';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';

function App() {
   return (
      <>
         <Header />
         <main className="main">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />

               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </main>
      </>
   );
}

export default App;
