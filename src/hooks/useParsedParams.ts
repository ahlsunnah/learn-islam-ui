import { useParams } from '@reach/router'
import { useMemo } from 'react'
import _reduce from 'lodash/reduce'
type Params = { [k: string]: string }
type ParsedParams = { [k: string]: number | undefined }

const useParsedParams = () => {
  const params: Params = useParams()

  const parsedParams: ParsedParams = useMemo(() => {
    return _reduce<Params, ParsedParams>(
      params,
      (acc, value, key) => {
        const parsedValue = parseInt(value, 10)
        if (Number.isNaN(parsedValue)) {
          console.log(`${key} is not a number, his value is ${parsedValue}`)
        } else {
          acc[key] = parsedValue
        }
        return acc
      },
      {} as ParsedParams
    )
  }, [params])

  return parsedParams
}

export default useParsedParams
