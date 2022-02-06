import AppointOne from "../../components/appointmentsettings/AppointOne/AppointOne"
import AppointTwo from "../../components/appointmentsettings/AppointTwo/AppointTwo";
import AppointThree from "../../components/appointmentsettings/AppointThree/AppointThree";

interface Appointmentpagesprops {
    activepage: number
}

export default function AppointmentStepsPages({activepage}: Appointmentpagesprops) {

    if (activepage === 0) {
        return (
            <AppointOne/>
        )
    } else if (activepage === 1) {
        return (
            <AppointTwo/>
        )
    } else {
        return (
            <AppointThree/>
        )
    }
}