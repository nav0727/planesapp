/* eslint-disable react/no-unknown-property */
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app-container" testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem planetDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
