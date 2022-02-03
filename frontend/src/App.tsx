import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/general/Homepage"
import AppointmentHome from "./pages/appointmentsettings/AppointmentHome"
import OverviewRestaurants from "./pages/restaurants/OverviewRestaurants"
import VoteResult from "./pages/result/VoteResult"
import RequireAuth from './components/login/RequireAuth';
import AuthProvider from './context/AuthProvider';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <div className="App">
        <AuthProvider>
      <Routes>
          <Route path="/login" element={<LoginPage/>}/>
              <Route path="/" element={<RequireAuth><Homepage/></RequireAuth>}/>
              <Route path="/createDate" element={<RequireAuth><AppointmentHome/></RequireAuth>}/>
              <Route path="/restaurants" element={<RequireAuth><OverviewRestaurants/></RequireAuth>}/>
              <Route path="/overview" element={<RequireAuth><VoteResult/></RequireAuth>}/>
      </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
