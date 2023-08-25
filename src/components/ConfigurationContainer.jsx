import '../styles/ConfigurationContainer.css'
import { General } from './General'
import { Educational } from './Educational'
import { Professional } from './Professional'

function ConfigurationContainer({
  generalInfo, generalInfoSetter, 
  educationalInfo, educationalInfoSetter, 
  professionalInfo, professionalInfoSetter
}) {
  return (
    <div className='configuration-container'>
      <h1 style={{marginBottom:'20px'}}>Odin&apos;s <br />CV Application</h1>
      <General generalInfo={generalInfo} generalInfoSetter={generalInfoSetter}/>
      <Educational educationalInfo={educationalInfo} educationalInfoSetter={educationalInfoSetter}/>
      <Professional professionalInfo={professionalInfo} professionalInfoSetter={professionalInfoSetter}/>
    </div>
  )
}

export { ConfigurationContainer }