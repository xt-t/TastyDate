import Appointone from "../../components/appointmentsettings/Appointone"
import Appointtwo from "../../components/appointmentsettings/Appointtwo";
import Appointthree from "../../components/appointmentsettings/Appointthree";

interface Appointmentpagesprops {
    activepage: number
}

export default function AppointmentPages({activepage}:Appointmentpagesprops) {

    if (activepage === 0) {
        return (
            <div>
                <Appointone/>
            </div>
        )
    }
    else if (activepage === 1) {
        return (
        <div>
            <Appointtwo/>
        </div>
        )
    }
    else {
        return (
        <div>
            <Appointthree/>
        </div>
        )
    }
}