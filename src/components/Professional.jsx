import { useState } from "react";
import { ConfigurationForm } from "./ConfigurationForm";
import { getNewID, checkValidity, handleNewForm, handleFormCancelation, handleWrapperClick } from "../common";

function Professional({ professionalInfo, professionalInfoSetter }) {

  const [contentType, setContentType] = useState('display');
  
  const formInputs = [
    { id: 'companyName', label: 'Company name', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'positionTitle', label: 'Position', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'jobDescription', label: 'Description', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'startingDate', label: 'From', type: 'date', placeHolder: '', onInputHandler: '' },
    { id: 'endingDate', label: 'To', type: 'date', placeHolder: '', onInputHandler: '' }
  ]

  const handleFormValidation = (event) => {
    const elements = event.target.elements;

    event.preventDefault();

    if (checkValidity(elements.companyName) & checkValidity(elements.positionTitle) & checkValidity(elements.startingDate)) {
      let id = getNewID(professionalInfo);
      professionalInfoSetter([...professionalInfo,
      {
        id: id,
        companyName: elements.companyName.value,
        positionTitle: elements.positionTitle.value,
        jobDescription: elements.jobDescription.value,
        startingDate: elements.startingDate.value,
        endingDate: elements.endingDate.value
      }
      ])
      setContentType('display');
    }
  }

  const professionContent = (type) => {
    switch (type) {
      case 'display':
        return (
          <>
            {professionalInfo.map(profession =>
              <div className="card profession" key={profession.id}>
                <h3>{profession.companyName}<br />{profession.positionTitle}</h3>
                <button data-profession-id={profession.id}><ion-icon name="create-outline"></ion-icon></button>
                <button data-profession-id={profession.id}><ion-icon name="trash-outline"></ion-icon></button>
              </div>
            )}
            <button className="card new-content" onClick={() => handleNewForm(setContentType)}><ion-icon name="add"></ion-icon></button>
          </>
        )
      case 'form':
        return (<ConfigurationForm inputs={formInputs} onSubmitHandler={handleFormValidation} onCancelHandler={(e) => handleFormCancelation(e, setContentType)} />)
      default:
        return <></>;
    }
  }

  return (
    <div className="professional">
      <button className="card wrapper-toggle" onClick={(e) => handleWrapperClick(e, document.querySelector('.professional'))}>
        <h2>Profession</h2>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
      <div className="content">{professionContent(contentType)}</div>
    </div>
  )
}

export { Professional } 