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
          { id: 'schoolName', label: 'School name', type: 'text', placeHolder: '', onInputHandler: '' },
          { id: 'studyTitle', label: 'Study title', type: 'text', placeHolder: '', onInputHandler: '' },
          { id: 'studyDate', label: 'Study date', type: 'date', placeHolder: '', onInputHandler: '' }
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
        elementMandatoryInfo={['schoolName', 'studyTitle']}
        elementInfo={educationalInfo}
        elementInfoSetter={educationalInfoSetter}
      />
      <ConfigurationElement
        elementName='professional'
        elementTitle='Profession'
        elementFormInputs={[
          { id: 'companyName', label: 'Company name', type: 'text', placeHolder: '', onInputHandler: '' },
          { id: 'positionTitle', label: 'Position', type: 'text', placeHolder: '', onInputHandler: '' },
          { id: 'jobDescription', label: 'Description', type: 'text', placeHolder: '', onInputHandler: '' },
          { id: 'startingDate', label: 'From', type: 'date', placeHolder: '', onInputHandler: '' },
          { id: 'endingDate', label: 'To', type: 'date', placeHolder: '', onInputHandler: '' }
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
        elementMandatoryInfo={['companyName', 'positionTitle', 'startingDate']}
        elementInfo={professionalInfo}
        elementInfoSetter={professionalInfoSetter}
      />
    </div>
  )
}

export { ConfigurationContainer }

// elementName, elementTitle,  elementFormInputs, getNewElement