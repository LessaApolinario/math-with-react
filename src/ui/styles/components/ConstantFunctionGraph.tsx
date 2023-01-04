import { FunctionGraph } from "mafs"

interface ConstantFunctionGraphProps {
  value: number
}

function ConstantFunctionGraph({ value }: ConstantFunctionGraphProps) {
  return <FunctionGraph.OfX y={(_) => value} weight={1} />
}

export default ConstantFunctionGraph
