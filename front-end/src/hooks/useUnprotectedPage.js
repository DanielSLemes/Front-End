import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToFeedPage } from "../routes/Cordinator"

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      goToFeedPage(history)
    }
  }, [history])
}

export default useUnprotectedPage