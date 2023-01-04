import {
  CartesianCoordinates,
  Mafs
} from 'mafs'

import styles from '../styles/pages/HomePage.module.scss'

import LinearFunctionGraph from '../styles/components/LinearFunctionGraph'
import FirstDegreeFunctionGraph from '../styles/components/FirstDegreeFunctionGraph'
import SecondDegreeFunctionGraph from '../styles/components/SecondDegreeFunctionGraph'
import ConstantFunctionGraph from '../styles/components/ConstantFunctionGraph'

function HomePage() {
  return (
    <div className={styles.container}>
      <Mafs height={664}>
        <CartesianCoordinates subdivisions={2} />
        <LinearFunctionGraph a={1} />
        <FirstDegreeFunctionGraph a={2} b={1} />
        <FirstDegreeFunctionGraph a={4} />
        <SecondDegreeFunctionGraph a={5} b={2} c={-1} />
        <ConstantFunctionGraph value={2} />
      </Mafs>
    </div>
  )
}

export default HomePage
