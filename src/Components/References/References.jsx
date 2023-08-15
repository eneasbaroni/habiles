import './References.css'

const References = () => {
  return (
    <div id='references'>
      <div className="referenceGroup">
        <div className="circleJusticia"></div>
        <p className="referenceText">Feriado decretado por la Justicia de Córdoba Provincial</p>
      </div>
      <div className="referenceGroup">
        <div className="circleFederal"></div>
        <p className="referenceText">Feriado Federal por la Justicia de Córdoba Provincial</p>
      </div>
      <div className="referenceGroup">
        <div className="circleAdministrativo"></div>
        <p className="referenceText">Feriado Administrativo por la Justicia de Córdoba Provincial</p>
      </div>
    </div>
  )
}

export default References
