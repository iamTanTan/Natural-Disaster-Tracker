import Map from './components/Map';
import Header from './components/Header'
import { useState, useEffect } from 'react'


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
    <Header />
      { !loading ? <Map eventData={eventData} /> : <h1>Loading...</h1> }
    </div>
  );
}

export default App;
