// 1. Spalte: User
// 1. Zeile: pickedDate => aufsteigend und prüfen, ob gleich. Falls ja, Zeiten dem Datum zuordnen.
// 2. Zeile: Zeiten aufsteigend darstellen.
// 3. Zeile: Resultat - Darstellung der Summe
// 4. Zeile: Userwahl - x und Häckchen
// letzte Zeile: neuer Userinput (falls bereits eingegeben - Wahl zwischen löschen und ändern)
//
// Länge durch TimeItemAnzahl => Anzahl Checkboxe
import * as React from 'react';
import {TastyDateItem} from "../../models/result/TastyDateItem";

interface VoteTimeTableProps {
    transferSettingsItem: TastyDateItem
}

export default function VoteTimeTable({transferSettingsItem}: VoteTimeTableProps) {


    return (
        <div>


            <div className="row">
                <div className="column">
                    <h2>Column 1</h2>
                    <p>Some text..</p>
                </div>
                <div className="column">
                    <h2>Column 2</h2>
                    <p>Some text..</p>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <h2>Column 3</h2>
                    <p>Some text..</p>
                </div>
                <div className="column">
                    <h2>Column 4</h2>
                    <p>Some text..</p>
                </div>
            </div>

        </div>
    )
}