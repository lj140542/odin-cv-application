import '../styles/ConfigurationContainer.css'
import { General } from './General'
import { ConfigurationElement } from './ConfigurationElement'

function ConfigurationContainer({
  generalInfo, generalInfoSetter,
  educationalInfo, educationalInfoSetter,
  professionalInfo, professionalInfoSetter
}) {
  return (
    <div className='configuration-container'>
      <h1 style={{ marginBottom: '20px' }}>Odin&apos;s <br />CV Application</h1>
      <General generalInfo={generalInfo} generalInfoSetter={generalInfoSetter} />
      <ConfigurationElement
        elementName='educational'
        elementTitle='Education'
        elementFormInputs={[
          { id: 'schoolName', label: 'School name', type: 'text', placeHolder: '' },
          { id: 'studyTitle', label: 'Study title', type: 'text', placeHolder: '' },
          { id: 'studyDate', label: 'Study date', type: 'date', placeHolder: '' }
        ]}
        elementCreationFunction={(id, formElements) => {
          return {
            id: id,
            schoolName: formElements.schoolName.value,
            studyTitle: formElements.studyTitle.value,
            studyDate: formElements.studyDate.value,
            displayValue: formElements.studyTitle.value
          }
        }}
        elementGetDisplayValueFunction={element => element.studyTitle}
        elementMandatoryInfo={['schoolName', 'studyTitle']}
        elementInfo={educationalInfo}
        elementInfoSetter={educationalInfoSetter}
      />
      <ConfigurationElement
        elementName='professional'
        elementTitle='Profession'
        elementFormInputs={[
          { id: 'companyName', label: 'Company name', type: 'text', placeHolder: '' },
          { id: 'positionTitle', label: 'Position', type: 'text', placeHolder: '' },
          { id: 'jobDescription', label: 'Description', type: 'text', placeHolder: '' },
          { id: 'startingDate', label: 'From', type: 'date', placeHolder: '' },
          { id: 'endingDate', label: 'To', type: 'date', placeHolder: '' }
        ]}
        elementCreationFunction={(id, formElements) => {
          return {
            id: id,
            companyName: formElements.companyName.value,
            positionTitle: formElements.positionTitle.value,
            jobDescription: formElements.jobDescription.value,
            startingDate: formElements.startingDate.value,
            endingDate: formElements.endingDate.value,
            displayValue: formElements.companyName.value + " - " + formElements.positionTitle.value
          }
        }}
        elementGetDisplayValueFunction={element => element.companyName + " - " + element.positionTitle}
        elementMandatoryInfo={['companyName', 'positionTitle', 'startingDate']}
        elementInfo={professionalInfo}
        elementInfoSetter={professionalInfoSetter}
      />
    </div>
  )
}

export { ConfigurationContainer }