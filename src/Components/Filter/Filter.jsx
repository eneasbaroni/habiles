import './Filter.css'

// eslint-disable-next-line react/prop-types
const Filter = ({ selectFilter }) => {
  return (
    <div id='filter'>
      <p onClick={ () => selectFilter('')}>Todos</p>
      <p onClick={ () => selectFilter('Justicia')}>Justicia</p>
      <p onClick={ () => selectFilter('Federal')}>Federal</p>
      <p onClick={ () => selectFilter('Administrativo')}>Administrativo</p>
    </div>
  )
}

export default Filter
