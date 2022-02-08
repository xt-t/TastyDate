import React, {useState} from 'react';
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
import {dataCompleteDateInfos} from "./service/tastydate-api-service";

function App() {
    const [transferSettingsItem, setTransferSettingsItem] = useState<dataCompleteDateInfos>({idVote:"",infoDate:{pickedTastyDateName:"",pickedLocation:"",pickedNotes:"",pickedChosenDisplayName:""} ,infoDateTimes: [], infoRestaurantData: []});

    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/createDate" element={<RequireAuth><AppointmentHome setTransferSettingsItem={setTransferSettingsItem}/></RequireAuth>}/>
                    <Route path="/restaurants" element={<RequireAuth><OverviewRestaurants/></RequireAuth>}/>
                    <Route path="/overview" element={<RequireAuth><VoteResult transferSettingsItem={transferSettingsItem}/></RequireAuth>}/>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
