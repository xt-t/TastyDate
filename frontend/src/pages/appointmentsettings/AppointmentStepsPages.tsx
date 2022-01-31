import AppointOne from "../../components/appointmentsettings/AppointOne"
import AppointTwo from "../../components/appointmentsettings/AppointTwo";
import AppointThree from "../../components/appointmentsettings/AppointThree";

interface Appointmentpagesprops {
    activepage: number
}

export default function AppointmentStepsPages({activepage}:Appointmentpagesprops) {

    if (activepage === 0) {
        return (
            <div>
                <AppointOne/>
            </div>
        )
    }
    else if (activepage === 1) {
        return (
        <div>
            <AppointTwo/>
        </div>
        )
    }
    else {
        return (
        <div>
            <AppointThree/>
        </div>
        )
    }
}