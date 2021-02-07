import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/snowflake-variant'

function IcebergLocationMarker({ lat, lng, onClick }) {
    return (
            <span className="location-marker" onClick={onClick}>
                <Icon icon={locationIcon} className="iceberg-location-icon" />
            </span>
    )
}

export default IcebergLocationMarker
