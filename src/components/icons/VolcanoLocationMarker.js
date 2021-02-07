import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/terrain'

// This component is for the volcano icon placement on the map
function VolcanoLocationMarker({ lat, lng, onClick }) {
    return (
            <span className="location-marker" onClick={onClick}>
                <Icon icon={locationIcon} className="volcano-location-icon" />
            </span>
    )
}

export default VolcanoLocationMarker