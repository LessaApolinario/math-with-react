import {
  FunctionGraph,
  Point } from "mafs"

interface FirstDegreeFunctionGraphProps {
  a: number
  b?: number
}

function FirstDegreeFunctionGraph(props: FirstDegreeFunctionGraphProps) {
  function firstDegreeFunction(x: number): number {
    const { a, b } = props
    return (a * x) + (b ?? 0)
  }

  function zero(): number {
    const { a, b } = props
    if (a === 0) return 0
    return (-((b) ?? 0)) / a
  }

  return (
    <>
      <FunctionGraph.OfX y={(x) => firstDegreeFunction(x)} weight={1} />
      <Point x={zero()} y={0} />
    </>
  )
}

export default FirstDegreeFunctionGraph
