import { useEffect, useState } from 'react'
import getData from '../requests/getData'

const useRequestData = (initialState, endpoint) => {
  const [data, setData] = useState(initialState)

  useEffect(() => getData(endpoint, setData), [endpoint])

  const updateData = () => getData(endpoint, setData)

  return [data, updateData]
}
  
export default useRequestData