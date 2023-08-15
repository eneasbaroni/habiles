import './Home.css'

// Importar la base de datos
// import dates from '../../Data/calendar.js'
import Calendar from '../../Components/Calendar/Calendar'
import References from '../../Components/References/References'

const Home = () => {
  return (
    <main id='home'>
      <Calendar/>
      <References/>
    </main>
  )
}

export default Home
