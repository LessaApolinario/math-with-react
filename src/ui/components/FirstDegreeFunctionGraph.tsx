import {
  FunctionGraph,
  Point
} from "mafs"

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
    
    if (a === 0) {
      throw new Error('Erro: O coeficiente angular não pode ser 0')
    }

    return (-((b) ?? 0)) / a
  }

  function renderPoint(): JSX.Element {
    try {
      return <Point x={zero()} y={0} color={'red'} />
    } catch (error: any) {
      console.log(error.message)
    }

    return <></>
  }

  return (
    <>
      <FunctionGraph.OfX y={(x) => firstDegreeFunction(x)} weight={1} />
      {renderPoint()}
    </>
  )
}

export default FirstDegreeFunctionGraph
