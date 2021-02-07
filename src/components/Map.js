import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import FireLocationMarker from './icons/FireLocationMarker'
import SevereStormLocationMarker from './icons/SevereStormLocationMarker'
import VolcanoLocationMarker from './icons/VolcanoLocationMarker'
import LocationInfoBox from './LocationInfoBox'
import IcebergLocationMarker from './icons/IcebergLocationMarker'

// This is the map component of the tracker
const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev) => {
        // Wildfire markers
        if(ev.categories[0].id === 8) {
            return <FireLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                     onClick={() => setLocationInfo({ id: ev.id, title: ev.title})} />;

        // Severe Storm markers    
        } else if (ev.categories[0].id === 10) {
            return <SevereStormLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
             onClick={() => setLocationInfo({ id: ev.id, title: ev.title})} />   
             
              
        // Iceberg markers
        } else if (ev.categories[0].id === 15) {
            return <IcebergLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
             onClick={() => setLocationInfo({ id: ev.id, title: ev.title})} />   

        // Volcano Marker (Note 'Dukono Volcanoes throw an error from API)
        } else if (ev.categories[0].id ===  12 && ev.title !== 'Dukono Volcano, Indonesia') {
            return <VolcanoLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title})} />     
        } else {
            return null
        }    
        
    })



    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAPS_API_KEY
                }}
                defaultCenter={ center }
                    defaultZoom={ zoom }
            >

            {markers}
                
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}

        </div>
    )
}

// Set default location
Map.defaultProps = {
    center: {
        lat: 37.7740,
        lng: -122.4351,
    },
    zoom: 6
 }

export default Map
