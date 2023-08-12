import './Home.css'

// Importar la base de datos
// import dates from '../../Data/calendar.js'
import Calendar from '../../Components/Calendar/Calendar'
import { useEffect } from 'react'

const Home = () => {
  const obtenerIDDeLinkDrive = (link) => {
    // Expresión regular para buscar el patrón del ID en el enlace de Google Drive
    const regex = /\/file\/d\/([a-zA-Z0-9_-]+)\//
    const match = link.match(regex)

    if (match && match.length === 2) {
      console.log('ID del enlace de Google Drive:', match[1])
      return match[1]
    } else {
      console.log('No se pudo extraer el ID del enlace de Google Drive.')
      return null
    }
  }
  useEffect(() => {
    obtenerIDDeLinkDrive('https://drive.google.com/file/d/1n0PxnxmIreSMYxkwx-R3RYomzMjFHP0D/view?usp=sharing')
  }, [])

  return (
    <main id='home'>
      {/* <video src="https://drive.google.com/uc?id=1i2F2QfYhln116ITpTJ2-U_x_H1NSk_19" autoPlay loop muted></video> */}
      {/* <img src="https://drive.google.com/file/d/160M1p6ZJK2uslpHIUZC9b9axhIv1y0GV/view?usp=sharing" alt="imagen" /> */}
      <Calendar/>
    </main>
  )
}

export default Home
