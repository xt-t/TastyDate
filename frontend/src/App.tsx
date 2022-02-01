import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/general/Homepage"
import AppointmentHome from "./pages/appointmentsettings/AppointmentHome"
import OverviewRestaurants from "./pages/restaurants/OverviewRestaurants"
import VoteResult from "./pages/result/VoteResult"

function App() {
  return (
    <div className="App">
      <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/createDate" element={<AppointmentHome/>}/>
              <Route path="/restaurants" element={<OverviewRestaurants/>}/>
              <Route path="/overview" element={<VoteResult/>}/>
      </Routes>
    </div>
  );
}

export default App;
