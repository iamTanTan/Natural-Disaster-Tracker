import FireLocationMarker from './icons/FireLocationMarker'
import SevereStormLocationMarker from './icons/SevereStormLocationMarker'

function Header() {
    return (
        <header className='header'>
            <h1>Natural Disaster Tracker <FireLocationMarker /><SevereStormLocationMarker /></h1> 
        </header>
    )
}

export default Header
