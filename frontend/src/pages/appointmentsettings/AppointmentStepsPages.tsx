import AppointOne from "../../components/appointmentsettings/AppointOne/AppointOne"
import AppointTwo from "../../components/appointmentsettings/AppointTwo/AppointTwo";
import AppointThree from "../../components/appointmentsettings/AppointThree/AppointThree";
import {
    AppointOneType,
    AppointThreeType,
    AppointTwoType
} from "../../models/appointmentsettings/UseStateAppointStepTypes";

export interface Appointmentpagesprops {
    appointOne: AppointOneType
    appointTwo: AppointTwoType
    appointThree: AppointThreeType
    activepage: number
}

export default function AppointmentStepsPages(
    {appointOne, appointTwo, appointThree, activepage}: Appointmentpagesprops) {

    if (activepage === 0) {
        return (
            <AppointOne
                appointOne={appointOne}/>
        )
    } else if (activepage === 1) {
        return (
            <AppointTwo
                appointTwo={appointTwo}
            />
        )
    } else {
        return (
            <AppointThree
                appointThree={appointThree}/>
        )
    }
}