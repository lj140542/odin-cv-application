import '../styles/App.css'
import { useState } from 'react'
import { Resume } from './Resume'
import { ConfigurationContainer } from './ConfigurationContainer'

function App() {
  const [generalInfo, setGeneralInfo] = useState({ fullName: '', email: '', address: '' });
  const [educationalInfo, setEducationalInfo] = useState([]);
  const [professionalInfo, setProfessionalInfo] = useState([]);
  return (
    <div className='app'>
      <ConfigurationContainer
        generalInfo={generalInfo} generalInfoSetter={setGeneralInfo}
        educationalInfo={educationalInfo} educationalInfoSetter={setEducationalInfo}
        professionalInfo={professionalInfo} professionalInfoSetter={setProfessionalInfo}
      />
      <Resume generalInfo={generalInfo} />
    </div>
  )
}

export default App
