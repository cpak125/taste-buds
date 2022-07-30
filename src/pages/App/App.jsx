import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ?
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Routes>
            {/* Route components in here */}
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignUpForm />} />
          </Routes>
        </>
        // <AuthPage setUser={setUser} />
      }
    </main>
  );
}

