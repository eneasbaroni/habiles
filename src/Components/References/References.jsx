import './References.css'

const References = () => {
  return (
    <div id='references'>
      <div className="referenceGroup">
        <div className="circleJusticia"></div>
        <p className="referenceText">Día inhábil para la justicia provincial de Córdoba</p>
      </div>
      <div className="referenceGroup">
        <div className="circleFederal"></div>
        <p className="referenceText">Día inhábil para la justicia federal de la provincia de Córdoba</p>
      </div>
      <div className="referenceGroup">
        <div className="circleAdministrativo"></div>
        <p className="referenceText">Día inhábil administrativo para la provincia de Córdoba</p>
      </div>
    </div>
  )
}

export default References
