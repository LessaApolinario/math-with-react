import {
  FunctionGraph,
  Point } from "mafs"

interface SecondDegreeFunctionGraphProps {
  a: number
  b?: number
  c?: number
}

interface Zeros {
  x1?: number
  x2?: number
}

function SecondDegreeFunctionGraph(props: SecondDegreeFunctionGraphProps) {
  function secondDegreeFunction(x: number): number {
    const { a, b, c } = props
    return (a * x * x) + ((b ?? 0) * x) + (c ?? 0)
  }

  function zeros(): Zeros | undefined {
    const { a, b, c } = props
    let x1: number | undefined
    let x2: number | undefined
    const delta = ((b ?? 0) * (b ?? 0)) - 4 * a * (c ?? 0)


    if (delta < 0) {
      return
    }

    if (delta > 0) {
      x1 = (-(b ?? 0) + Math.sqrt(delta)) / (2 * a)
      x2 = (-(b ?? 0) - Math.sqrt(delta)) / (2 * a)
    }

    if (delta === 0) {
      x1 = x2 = -(b ?? 0) / (2 * a)
    }

    return { x1, x2 }
  }

  function renderPoints(): JSX.Element | '' {
    const roots = zeros()
    

    if (!roots?.x1 || !roots?.x2) {
      return ''
    }

    return (
      <>
        <Point x={roots.x1} y={0} />
        <Point x={roots.x2} y={0} />
      </>
    )
  }

  return (
    <>
      <FunctionGraph.OfX y={(x) => secondDegreeFunction(x)} weight={1} />
      {renderPoints()}
    </>
  )
}

export default SecondDegreeFunctionGraph
