import Map from './components/Map';
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Legend from './components/Legend';
import Loader from './components/Loader';


function App() {

  // This section is dedicated to making the API request and storing it as event data
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  // App component
  return (
    <div>
      
      { !loading ? <div><Header /><Map eventData={eventData} /> <Legend /></div> : <Loader />}
     
    </div>
  );
}

export default App;
