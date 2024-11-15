import React from 'react';
import "../src/assets/scss/style.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from "../src/components/Intro/Intro";
import LoginPage from './page/Login/Login';
import SignUp from './page/Signup/Signup';
import MainPage from './page/MainPage/mainpage';
import RecipePlusPage from './page/recipePlusPage/recipePlusPage';
import FinishLogin from './components/SignUp/finishlogin';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/recipe-plus' element={<RecipePlusPage />} />
        <Route path='/finish' element={<FinishLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
