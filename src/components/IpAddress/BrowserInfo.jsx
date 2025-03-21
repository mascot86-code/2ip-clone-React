import { useContext } from "react"
import AppContext from "../../context/app-context"

function BrowserInfo() {

  const {browserInfo} = useContext(AppContext)

  return (
    <div>
      <h2>BrowserInfo</h2>
      <p>Browser: {browserInfo.browser}</p>
    </div>
  )
}

export default BrowserInfo