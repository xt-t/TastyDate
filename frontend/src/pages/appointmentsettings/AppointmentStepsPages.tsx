import AppointOne from "../../components/appointmentsettings/AppointOne"
import AppointTwo from "../../components/appointmentsettings/AppointTwo";
import AppointThree from "../../components/appointmentsettings/AppointThree";

interface Appointmentpagesprops {
    activepage: number
}

export default function AppointmentStepsPages({activepage}:Appointmentpagesprops) {

    if (activepage === 0) {
        return (
                <AppointOne/>
        )
    }
    else if (activepage === 1) {
        return (
            <AppointTwo/>
        )
    }
    else {
        return (
            <AppointThree/>
        )
    }
}