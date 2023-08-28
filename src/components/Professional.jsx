import { useState } from "react";
import { ConfigurationForm } from "./ConfigurationForm";

function Professional({ professionalInfo, professionalInfoSetter }) {
  const [contentType, setContentType] = useState('display');
  const formInputs = [
    { id: 'companyName', label: 'Company name', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'positionTitle', label: 'Position', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'jobDescription', label: 'Description', type: 'text', placeHolder: '', onInputHandler: '' },
    { id: 'startingDate', label: 'From', type: 'date', placeHolder: '', onInputHandler: '' },
    { id: 'endingDate', label: 'To', type: 'date', placeHolder: '', onInputHandler: '' }
  ]

  const getNewID = () => {
    let maxId = 0;
    professionalInfo.forEach(profession => {
      if (profession.id > maxId) maxId = profession.id;
    });
    return maxId + 1;
  }

  const handleWrapperClick = (event) => {
    let content = document.querySelector('.professional .content');
    let icon = document.querySelector('.professional .wrapper-toggle ion-icon');
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

    if (elements.companyName.value === '') {
      inputValidity = false;
      if (elements.companyName.labels.length > 0) {
        label = elements.companyName.labels[0];
        label.innerHTML = '* ' + label.innerHTML
      }
      elements.companyName.placeholder = 'Please insert a value';
      elements.companyName.classList.add('error');
    }
    if (elements.positionTitle.value === '') {
      inputValidity = false;
      if (elements.positionTitle.labels.length > 0) {
        label = elements.positionTitle.labels[0];
        label.innerHTML = '* ' + label.innerHTML
      }
      elements.positionTitle.placeholder = 'Please insert a value';
      elements.positionTitle.classList.add('error');
    }
    if (elements.startingDate.value === '') {
      inputValidity = false;
      if (elements.startingDate.labels.length > 0) {
        label = elements.startingDate.labels[0];
        label.innerHTML = '* ' + label.innerHTML
      }
      elements.startingDate.placeholder = 'Please insert a value';
      elements.startingDate.classList.add('error');
    }

    if (inputValidity) {
      let id = getNewID();
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

  const handleFormCancelation = (event) => {
    event.preventDefault();
    setContentType('display');
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
    <div className="professional">
      <button className="card wrapper-toggle" onClick={handleWrapperClick}>
        <h2>Profession</h2>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
      <div className="content">{professionContent(contentType)}</div>
    </div>
  )
}

export { Professional } 