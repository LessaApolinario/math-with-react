import { FunctionGraph } from "mafs"

interface LinearFunctionGraphProps {
  a: number
}

function LinearFunctionGraph(props: LinearFunctionGraphProps) {
  function linearFunction(x: number): number {
    const { a } = props
    return a * x
  }

  return <FunctionGraph.OfX y={(x) => linearFunction(x)} weight={1} />
}

export default LinearFunctionGraph
