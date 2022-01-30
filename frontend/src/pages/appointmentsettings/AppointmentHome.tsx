import DisplayMenus from "../../components/general/DisplayMenus";
import AppointmentSteps from "./AppointmentSteps";
import "./Appointment.scss"

export default function AppointmentHome() {

    return (
        <div>
            <div>
                <div>
                <DisplayMenus/>
                </div>
                <div className="settingsdate">
                <AppointmentSteps/>
                </div>
            </div>
        </div>
    )
}