import { useState } from "react";
import { ConfigurationForm } from "./ConfigurationForm";

function Educational({ educationalInfo, educationalInfoSetter }) {

  const [contentType, setContentType] = useState('display');
  const formInputs = [
    { id: 'schoolName', label: 'School name', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'studyTitle', label: 'Study title', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'studyDate', label: 'Study date', type: 'date', placeHolder: '', onInputHandler: '' }
  ]

  const getNewID = () => {
    let maxId = 0;
    educationalInfo.forEach(education => {
      if (education.id > maxId) maxId = education.id;
    });
    return maxId + 1;
  }

  const handleWrapperClick = (event) => {
    let content = document.querySelector('.educational .content');
    let icon = document.querySelector('.educational .wrapper-toggle ion-icon');
    let isOpen = false;

    content.classList.toggle('open');
    isOpen = content.classList.contains('open');
    event.target.classList.toggle('open', isOpen);
    icon.classList.toggle('open', isOpen);
  }

  const handleNewForm = () => setContentType('form');

  const handleFormValidation = (event) => {
    const elements = event.target.elements;
    let inputValidity = true;
    let label = null;

    event.preventDefault();

    if (elements.schoolName.value === '') {
      inputValidity = false;
      if (elements.schoolName.labels.length > 0) {
        label = elements.schoolName.labels[0];
        label.innerHTML = '* ' + label.innerHTML
      }
      elements.schoolName.placeholder = 'Please insert a value';
      elements.schoolName.classList.add('error');
    }
    if (elements.studyTitle.value === '') {
      inputValidity = false;
      if (elements.studyTitle.labels.length > 0) {
        label = elements.studyTitle.labels[0];
        label.innerHTML = '* ' + label.innerHTML
      }
      elements.studyTitle.placeholder = 'Please insert a value';
      elements.studyTitle.classList.add('error');
    }

    if (inputValidity) {
      let id = getNewID();
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

  const handleFormCancelation = (event) => {
    event.preventDefault();
    setContentType('display');
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
            <button className="card new-content" onClick={handleNewForm}><ion-icon name="add"></ion-icon></button>
          </>
        )
      case 'form':
        return (<ConfigurationForm inputs={formInputs} onSubmitHandler={handleFormValidation} onCancelHandler={handleFormCancelation} />)
      default:
        return <></>;
    }
  }

  return (
    <div className="educational">
      <button className="card wrapper-toggle" onClick={handleWrapperClick}>
        <h2>Education</h2>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
      <div className="content">{educationContent(contentType)}</div>
    </div>
  )
}

export { Educational }