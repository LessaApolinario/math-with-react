import { FunctionGraph } from "mafs"

interface SecondDegreeFunctionGraphProps {
  a: number
  b?: number
  c?: number
}

function SecondDegreeFunctionGraph(props: SecondDegreeFunctionGraphProps) {
  function secondDegreeFunction(x: number): number {
    const { a, b, c } = props
    return (a * x * x) + ((b ?? 0) * x) + (c ?? 0)
  }

  return <FunctionGraph.OfX y={(x) => secondDegreeFunction(x)} weight={1} />
}

export default SecondDegreeFunctionGraph
