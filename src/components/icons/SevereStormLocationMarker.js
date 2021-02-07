import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/weather-hurricane'

// This component is for the severe-storm icon placement on the map
function SevereStormLocationMarker({ lat, lng, onClick }) {
    return (
            <span className="location-marker" onClick={onClick}>
                <Icon icon={locationIcon} className="storm-location-icon" />
            </span>
    )
}

export default SevereStormLocationMarker
