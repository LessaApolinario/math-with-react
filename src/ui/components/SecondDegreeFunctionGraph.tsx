import {
  FunctionGraph,
  Point
} from "mafs"

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

  function zeros(): Zeros {
    const { a, b, c } = props
    let x1: number | undefined
    let x2: number | undefined
    const delta = ((b ?? 0) * (b ?? 0)) - 4 * a * (c ?? 0)

    if (a === 0) {
      throw new Error('Erro: a não pode ser negativo, a função precisar ser do segundo grau')
    }

    if (delta < 0) {
      throw new Error('Erro: Não existem raízes para delta menor que 0')
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

  function renderPoints(): JSX.Element {
    try {
      const { x1, x2 } = zeros()

      return (
        <>
          <Point x={x1 ?? -1} y={0} color={'red'} />
          <Point x={x2 ?? -1} y={0} color={'red'} />
        </>
      )
    } catch (error: any) {
      console.log(error.message)
    }

    return <></>
  }

  return (
    <>
      <FunctionGraph.OfX y={(x) => secondDegreeFunction(x)} weight={1} />
      {renderPoints()}
    </>
  )
}

export default SecondDegreeFunctionGraph
