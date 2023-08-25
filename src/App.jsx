import './styles/App.css'
import { useState } from 'react'
import { Resume } from './components/Resume'
import { ConfigurationContainer } from './components/ConfigurationContainer'

function App() {
  const [generalInfo, setGeneralInfo] = useState({ fullName: '', email: '', address: '' })

  return (
    <div className='app'>
      <ConfigurationContainer generalInfo={generalInfo} generalInfoSetter={setGeneralInfo}/>
      <Resume generalInfo={generalInfo}/>
    </div>
  )
}

export default App
