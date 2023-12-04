import { useState } from 'react'
import './App.css'
import { Usercontext } from './Usercontext'
import { Login } from './Login'
import { Profile } from './Profile'


function App() {

  const [data, setdata] = useState(null)
  return (
    <Usercontext.Provider value={{ data, setdata }}>
      <div>
        <Profile />
      </div>
      <div>
        <Login />
      </div>
    </Usercontext.Provider>
  )
}
export default App
