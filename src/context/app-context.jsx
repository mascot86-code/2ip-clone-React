import { createContext, useState, useEffect } from 'react'


const AppContext = createContext({
  // default state
  counter: 0,
  checbox: false,
  ip: '',
  loading: false
})

export function AppContextProvider({children}) {

  const [ipAddress, setIpAddress] = useState('');
  const [loading, setLoading] = useState(false)
  const {ip} = ipAddress;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIpAddress(data))
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    <AppContext.Provider value={{ip, loading}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;