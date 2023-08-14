import { useEffect, useState } from 'react'
import './Calendar.css'
import dates from '../../Data/calendar.js'

const weekdays = ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']
const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const isDateFestive = (year, month, day) => {
  const dateKey = `${day}/${month + 1}/${year}` // Note: month is zero-indexed in JS Date
  return dates[dateKey] !== undefined
}

const Calendar = () => {
  const today = new Date()
  const initialYear = today.getFullYear()
  const initialMonth = today.getMonth()
  const initialDay = today.getDate()

  const [initialWeekdayOfMonth, setInitialWeekdayOfMonth] = useState()
  const [selectedYeard, setSelectedYeard] = useState(initialYear)
  const [selectedMonth, setSelectedMonth] = useState(initialMonth)
  const [selectedDay, setSelectedDay] = useState(initialDay)
  const [daysOfMonth, setDaysOfMonth] = useState()

  // useEffect para obtener el primer día de la semana del mes
  useEffect(() => {
    console.log(dates)
    const firstDayOfMonth = new Date(selectedYeard, selectedMonth, 1)
    const weekday = firstDayOfMonth.getDay()
    setInitialWeekdayOfMonth(weekday)
  }, [selectedYeard, selectedMonth])

  // useEffect para obtener los días del mes
  useEffect(() => {
    const days = new Date(selectedYeard, selectedMonth + 1, 0).getDate()
    setDaysOfMonth(days)
  }, [selectedYeard, selectedMonth])

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedDay(null)
      setSelectedMonth(0)
      setSelectedYeard(selectedYeard + 1)
    } else {
      setSelectedDay(null)
      setSelectedMonth(selectedMonth + 1)
    }
  }

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedDay(null)
      setSelectedMonth(11)
      setSelectedYeard(selectedYeard - 1)
    } else {
      setSelectedDay(null)
      setSelectedMonth(selectedMonth - 1)
    }
  }

  return (
    <div id='calendar'>
      <div className="calendarNotes">
        <h2>Nota del día:</h2>
        {/* verificar si el dia selecionado está en dates. Sí esta, agregar la festividad */}
        {dates[`${selectedDay}/${selectedMonth + 1}/${selectedYeard}`] !== undefined ? <h3>{dates[`${selectedDay}/${selectedMonth + 1}/${selectedYeard}`]}</h3> : <h3>Es día hábil</h3>}
      </div>
      <div className='calendarTitle'>
        <h1>Bienvenido</h1>
        {dates[`${initialDay}/${initialMonth + 1}/${initialYear}`] !== undefined ? <h3>Hoy {today.toLocaleDateString()}: se conmemora {dates[`${initialDay}/${initialMonth + 1}/${initialYear}`]}</h3> : <h3>Hoy {today.toLocaleDateString()}, es día hábil</h3>}
      </div>
      <div className='calendarHeader'>
        <div className="dateControler">
          <button onClick={prevMonth}>&lt;</button>
          {/* pasar el selectedMonth a texto */}
          <h2>{monthNames[selectedMonth]}</h2>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div className="dateControler">
          <button onClick={() => setSelectedYeard(selectedYeard - 1)}>&lt;</button>
          <h2>{selectedYeard}</h2>
          <button onClick={() => setSelectedYeard(selectedYeard + 1)}>&gt;</button>
        </div>
      </div>
      <div className='calendarDays'>
        {weekdays.map((weekday, index) => (
          <div className='calendarWeekday' key={index}>
            {weekday}
          </div>
        ))}
      </div>
      <div className='calendarGrill'>
        {/* blank spaces teniendo en cuenta el initialWeekdayofTheMonth */}
        {Array(initialWeekdayOfMonth)
          .fill()
          .map((_, index) => (
            <div className='calendarDay' key={index}></div>
          ))}
        {/* days of the month */}
        {Array(daysOfMonth)
          .fill()
          .map((_, index) => {
            const day = index + 1
            const isFestive = isDateFestive(selectedYeard, selectedMonth, day)
            return (
              <div
                className={`calendarDay ${selectedDay === day ? 'selectedDay' : ''} ${isFestive ? 'festiveDay' : ''}`}
                key={index}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Calendar
