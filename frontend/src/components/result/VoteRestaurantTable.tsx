import * as React from 'react';
import {TastyDateItem} from "../../models/result/TastyDateItem";

interface VoteRestaurantTableProps {
    transferSettingsItem: TastyDateItem
}

export default function VoteRestaurantTable({transferSettingsItem, }: VoteRestaurantTableProps) {


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