import DisplayMenus from "../../components/general/DisplayMenus";
import AppointmentSteps from "./AppointmentSteps";
import "./Appointment.scss"

interface AppointmentHomeProps{
    setTransferSettingsItem: Function
}

export default function AppointmentHome({setTransferSettingsItem}:AppointmentHomeProps) {

    return (
        <div>
            <DisplayMenus/>
            <div className="settingsdate">
                <AppointmentSteps setTransferSettingsItem={setTransferSettingsItem}/>
            </div>
        </div>
    )
}