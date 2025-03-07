import { useEffect, useState, useContext } from "react";
import AppContext from "../../context/app-context";
import { Spin } from "antd";


const IpAddress = () => {

  const {ip, loading} = useContext(AppContext);

  return (
    <div>
      {loading ? <Spin fullscreen /> : (
        <>
          <p>My public IP address is:</p>
          <h1>{ip}</h1>
        </>
      )}
      
    </div>
  )
}

export default IpAddress