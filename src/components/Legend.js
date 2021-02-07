import FireLocationMarker from './icons/FireLocationMarker'
import SevereStormLocationMarker from './icons/SevereStormLocationMarker'
import VolcanoLocationMarker from './icons/VolcanoLocationMarker'

import React from 'react'
import IcebergLocationMarker from './icons/IcebergLocationMarker'

function Legend() {
    return (
        <span className="legend">
        <h3>Legend</h3>
            <ul>
                <li><VolcanoLocationMarker /> Volcano </li>
                <li><FireLocationMarker /> Wildfire </li>
                <li><SevereStormLocationMarker /> Severe Storm </li>
                <li><IcebergLocationMarker /> Iceberg </li>
            </ul>
        </span>
    )
}

export default Legend

