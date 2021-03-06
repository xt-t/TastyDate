import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/general/Homepage"
import AppointmentHome from "./pages/appointmentsettings/AppointmentHome"
import OverviewRestaurants from "./pages/restaurants/OverviewRestaurants"
import VoteResult from "./pages/result/VoteResult"
import RequireAuth from './components/loginregister/RequireAuth';
import AuthProvider from './context/AuthProvider';
import LoginPage from './pages/loginregister/LoginPage';
import RegisterPage from './pages/loginregister/RegisterPage';
import OverviewTastyDateItems from "./pages/result/OverviewTastyDateItems";
import Tutorial from "./pages/general/Tutorial";

function App() {

    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/tutorial" element={<Tutorial/>}/>
                    <Route path="/createDate" element={<RequireAuth><AppointmentHome/></RequireAuth>}/>
                    <Route path="/restaurants" element={<RequireAuth><OverviewRestaurants/></RequireAuth>}/>
                    <Route path="/overview" element={<RequireAuth><OverviewTastyDateItems/></RequireAuth>}/>
                    <Route path="/overview/:tastyDateId" element={<VoteResult/>}/>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
