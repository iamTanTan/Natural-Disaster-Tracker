import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/pine-tree-fire'

// This component is for the forest fire icon placement on the map
function FireLocationMarker({ lat, lng, onClick }) {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="fire-location-icon" />
        </div>
    )
}

export default FireLocationMarker
