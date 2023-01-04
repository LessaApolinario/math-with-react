import {
  FunctionGraph,
  Point
} from "mafs"

interface ConstantFunctionGraphProps {
  value: number
}

function ConstantFunctionGraph({ value }: ConstantFunctionGraphProps) {
  return (
    <>
      <FunctionGraph.OfX y={(_) => value} weight={1} />
      <Point x={0} y={value} color={'red'} />
    </>
  )
}

export default ConstantFunctionGraph
