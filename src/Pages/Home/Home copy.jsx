import { useState, useEffect } from 'react'
import './Home.css'

// Importar la base de datos
import dates from '../../Data/calendar.js'
import Calendar from '../../Components/Calendar/Calendar'

const Home = () => {
  const date = new Date()
  const [festive, setFestive] = useState(false)

  // verificar si el dia actual se encuentra en la base de datos

  useEffect(() => {
    const today = date.toLocaleDateString()
    // eslint-disable-next-line no-prototype-builtins
    if (dates.hasOwnProperty(today)) {
      console.log(dates[today])
      setFestive(true)
    } else {
      console.log('no existe')
    }
  }, [])

  /*
  Funciones con fechas:
  - getFullYear() -> Año
  - getMonth() -> Mes (Numero)
  Para Obtener el mes en texto:
  - toLocaleDateString('es-ES', { month: 'long' })
  - getDate() -> Dia
  - getDay() -> Dia de la semana (Numero)
  Para Obtener el día de la semana en texto:
  - toLocaleDateString('es-ES', { weekday: 'long' })
  - getHours() -> Hora
  - getMinutes() -> Minutos
  - getSeconds() -> Segundos
  */

  return (
    <main id='home'>
      {festive ? <h1>{dates[date.toLocaleDateString()]}</h1> : <h1>No es festivo</h1>}
      <p>Año, mes, dia</p>
      {date.toLocaleDateString()} {/* Formato DD/M/AAAA */}
      <p>Mes</p>
      {date.toLocaleDateString('es-ES', { month: 'long' })} {/* Formato mes */}
      <p>Dia</p>
      {date.toLocaleDateString('es-ES', { weekday: 'long' })} {/* Formato dia */}
      <p>Mes</p>
      {date.getMonth()} {/* Formato mes */}
      <Calendar/>
    </main>
  )
}

export default Home
