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
import {TastyDateItem} from "./models/result/TastyDateItem";

function App() {
    const [transferSettingsItem, setTransferSettingsItem] = useState<TastyDateItem>(
        {tastyDateId: "620574685446918038a34c0a" , "infoTastyDate": {
                "pickedTastyDateName": "Test",
                "pickedLocation": "Köln",
                "pickedNotes": "Keine",
                "pickedChosenDisplayName": "Bernd"
            },
            "infoTastyDateTimes": [{
                "id": 1,
                "pickedDate": "Thu, Feb 10, 2022",
                "pickedStart": "14:33",
                "pickedEnd": "16:43"
            }, {
                "id": 2,
                "pickedDate": "Fri, Feb 11, 2022",
                "pickedStart": "14:24",
                "pickedEnd": "16:12"
            }, {
                "id": 3,
                "pickedDate": "Sat, Feb 12, 2022",
                "pickedStart": "14:33",
                "pickedEnd": "16:54"
            }],
            "infoRestaurantData": [],
            "timeVotes": [],
            "restaurantVotes": [],
            "votingResultsForOneDate": [],
            "votingResultsForOneRestaurant": []});

    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/createDate" element={<RequireAuth><AppointmentHome setTransferSettingsItem={setTransferSettingsItem}/></RequireAuth>}/>
                    <Route path="/restaurants" element={<RequireAuth><OverviewRestaurants/></RequireAuth>}/>
                    <Route path="/overview" element={<RequireAuth><VoteResult setTransferSettingsItem= {setTransferSettingsItem} transferSettingsItem={transferSettingsItem}/></RequireAuth>}/>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
