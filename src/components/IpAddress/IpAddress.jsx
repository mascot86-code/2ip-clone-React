import { useEffect, useState, useContext } from "react";
import AppContext from "../../context/app-context";
import BrowserInfo from "./BrowserInfo";
import { Spin } from "antd";


const IpAddress = () => {

  const {ip, loading, browserInfo} = useContext(AppContext);
  const [battery, setBattery] = useState(null)
  const [isCharging, setIsCharging] = useState(false)
  
  useEffect(() => {
    navigator.getBattery().then(battery => {
      setBattery(battery.level * 100)
      setIsCharging(battery.charging)
    })
  }, [])

  console.log(isCharging)

  return (
    <div>
      {loading ? <Spin fullscreen /> : (
        <>
          <p>My public IP address is:</p>
          <h1>{ip}</h1>
          <p>{browserInfo.browser}</p>
          <div class="progress mb-2">
            <div class="progress-bar" style={{width:battery + '%', background:  battery > '90' ?  'green' : 'red'}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{battery}%</div>
          </div>
          {isCharging ? (
            <p>⚡Charging</p>
          ) : (
            <p>🔋Not charging</p>
          )}
        </>
      )}
      
    </div>
  )
}

export default IpAddress