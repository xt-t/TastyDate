import DateSetter from "../../models/appointmentsettings/DateSetter";
import TimeSetter from "../../models/appointmentsettings/TimeSetter";


export default function Appointtwo() {

    return (
        <div className="addDateTime">
            <div className="elementDateTime">
                <DateSetter/>
            </div>
            <div className="elementDateTime">
                <TimeSetter/>
            </div>
            <div className="elementDateTime">
            </div>
        </div>
    )
}