import { FunctionGraph } from "mafs"

interface FirstDegreeFunctionGraphProps {
  a: number
  b?: number
}

function FirstDegreeFunctionGraph(props: FirstDegreeFunctionGraphProps) {
  function firstDegreeFunction(x: number): number {
    const { a, b } = props
    return (a * x) + (b ?? 0)
  }

  return <FunctionGraph.OfX y={(x) => firstDegreeFunction(x)} weight={1} />
}

export default FirstDegreeFunctionGraph
