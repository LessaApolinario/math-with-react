import {
  CartesianCoordinates,
  Mafs
} from 'mafs'

import styles from '../styles/pages/HomePage.module.scss'

import LinearFunctionGraph from '../components/LinearFunctionGraph'
import FirstDegreeFunctionGraph from '../components/FirstDegreeFunctionGraph'
import SecondDegreeFunctionGraph from '../components/SecondDegreeFunctionGraph'
import ConstantFunctionGraph from '../components/ConstantFunctionGraph'

function HomePage() {
  return (
    <div className={styles.container}>
      <Mafs height={664}>
        <CartesianCoordinates subdivisions={2} />
        <ConstantFunctionGraph value={2} />
        <LinearFunctionGraph a={1} />
        <FirstDegreeFunctionGraph a={2} b={1} />
        <FirstDegreeFunctionGraph a={2} />
        <FirstDegreeFunctionGraph a={0} b={2} />
        <SecondDegreeFunctionGraph a={4} b={-5} c={1} />
        <SecondDegreeFunctionGraph a={2} b={1} c={5} />
        <SecondDegreeFunctionGraph a={0} b={2} c={1} />
      </Mafs>
    </div>
  )
}

export default HomePage
