import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Home 컴포넌트
function Home() {
  return <h1>Hello!</h1>;
}

// Mypage 컴포넌트
function Mypage() {
  return <h1>My page</h1>
}

//Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>
}


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className='menus'>
            <li>
              <Link to='/' className='home'>Home</Link>
              <Link to='/mypage' className='mypage'>My page</Link>
              <Link to='/dashboard' className='dash'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
