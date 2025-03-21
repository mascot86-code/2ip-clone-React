import { createContext, useState, useEffect } from 'react'


const AppContext = createContext({
  // default state
  counter: 0,
  checbox: false,
  ip: '',
  loading: false,
  user: null,
  browserInfo: null,
})

export function AppContextProvider({children}) {

  const [ipAddress, setIpAddress] = useState('');
  const [loading, setLoading] = useState(false)
  const {ip} = ipAddress;
  const [user, setUser] = useState({
    name: 'Alex',
    email: 'alex@gmail.com',
    job: 'Developer',
  })
  const [browserInfo, setBrowserInfo] = useState({
    browser: navigator.userAgent,
  })
  
  function changeUser(newUser) {
    setUser(newUser)
  }

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
    <AppContext.Provider value={{ip, loading, user, changeUser, browserInfo}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;