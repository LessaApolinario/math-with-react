import {
  CartesianCoordinates,
  Mafs
} from 'mafs'

import styles from '../styles/pages/HomePage.module.scss'

function HomePage() {

  function firstDegreeFunction(x: number, a: number, b: number): number {
    return (a * x) + b
  }

  function linearFunction(x: number, a: number): number {
    return a * x
  }

  function secondDegreeFunction(x: number, a: number, b: number, c: number): number {
    return (a * x * x) + (b * x) + c
  }

  return (
    <div className={styles.container}>
      <Mafs height={664}>
        <CartesianCoordinates subdivisions={2} />
      </Mafs>
    </div>
  )
}

export default HomePage
