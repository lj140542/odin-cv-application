import { useState } from "react";
import { ConfigurationForm } from "./ConfigurationForm";
import { getNewID, checkValidity, handleNewForm, handleFormCancelation, handleWrapperClick } from "../common";

function Educational({ educationalInfo, educationalInfoSetter }) {

  const [contentType, setContentType] = useState('display');
  const formInputs = [
    { id: 'schoolName', label: 'School name', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'studyTitle', label: 'Study title', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'studyDate', label: 'Study date', type: 'date', placeHolder: '', onInputHandler: '' }
  ]

  const handleFormValidation = (event) => {
    const elements = event.target.elements;

    event.preventDefault();

    if (checkValidity(elements.schoolName) & checkValidity(elements.studyTitle)) {
      let id = getNewID(educationalInfo);
      educationalInfoSetter([...educationalInfo,
      {
        id: id,
        schoolName: elements.schoolName.value,
        studyTitle: elements.studyTitle.value,
        studyDate: elements.studyDate.value
      }
      ])
      setContentType('display');
    }
  }

  const educationContent = (type) => {
    switch (type) {
      case 'display':
        return (
          <>
            {educationalInfo.map(education =>
              <div className="card education" key={education.id}>
                <h3>{education.studyTitle}</h3>
                <button data-education-id={education.id}><ion-icon name="create-outline"></ion-icon></button>
                <button data-education-id={education.id}><ion-icon name="trash-outline"></ion-icon></button>
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
    <div className="educational">
      <button className="card wrapper-toggle" onClick={(e) => handleWrapperClick(e, document.querySelector('.educational'))}>
        <h2>Education</h2>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
      <div className="content">{educationContent(contentType)}</div>
    </div>
  )
}

export { Educational }