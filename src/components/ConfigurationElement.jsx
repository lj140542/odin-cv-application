import { useState } from "react";
import { ConfigurationForm } from "./ConfigurationForm";

function ConfigurationElement({ elementName, elementTitle, elementFormInputs, elementCreationFunction, elementGetDisplayValueFunction, elementMandatoryInfo, elementInfo, elementInfoSetter }) {

  const [contentType, setContentType] = useState('display');
  const [editedElement, setEditedElement] = useState(null)

  const handleWrapperClick = () => {
    let wrapper = document.querySelector('#' + elementName);
    let content = wrapper.querySelector('.configuration-element-content');
    let button = wrapper.querySelector('.wrapper');
    let icon = button.querySelector('ion-icon');
    let isOpen = false;

    content.classList.toggle('open');
    isOpen = content.classList.contains('open');
    button.classList.toggle('open', isOpen);
    icon.classList.toggle('open', isOpen);
  }

  const getNewID = () => {
    let maxId = 0;
    elementInfo.forEach(element => {
      if (element.id > maxId) maxId = element.id;
    });
    return maxId + 1;
  }

  const handleFormConformity = (inputsToCheck) => {
    let label = null;
    let validity = true

    inputsToCheck.forEach(input => {
      if (input.value === '') {
        validity = false;
        if (input.labels.length > 0) {
          label = input.labels[0];
          label.innerHTML = label.innerHTML[0] === '*' ? label.innerHTML : `* ${label.innerHTML}`;
        }
        input.placeholder = 'Please insert a value';
        input.classList.add('error');
      }
    })

    return validity;
  }

  const handleNewForm = () => setContentType('form');

  const handleFormValidation = (event) => {
    const elements = event.target.elements;
    const inputsToCheck = [];

    event.preventDefault();

    elementMandatoryInfo.forEach(mandatoryInfo => {
      inputsToCheck.push(elements[mandatoryInfo]);
    })

    if (handleFormConformity(inputsToCheck)) {
      if (editedElement === null) // element creation 
        elementInfoSetter([...elementInfo, elementCreationFunction(getNewID(), elements)]);

      setEditedElement(null);
      setContentType('display');
    }
  }

  const handleFormCancelation = (event) => {
    event.preventDefault();

    if (editedElement !== null) {
      let newArray = [...elementInfo];
      let index = newArray.findIndex((element) => element.id === editedElement.id);
      if (index >= 0 && index < newArray.length) {
        newArray[index] = editedElement;
        elementInfoSetter(newArray);
      }
    }

    setEditedElement(null);
    setContentType('display');
  }

  const handleFormInput = (event) => {
    let input = event.target;
    let newArray = [...elementInfo];
    let index = newArray.findIndex((element) => element.id === editedElement.id);

    if (index >= 0 && index < newArray.length) {
      let newElement = { ...newArray[index] };
      newElement[input.id] = input.value;
      newElement.displayValue = elementGetDisplayValueFunction(newElement);
      newArray[index] = newElement;
      elementInfoSetter(newArray);
    }
  }

  const handleEdition = (element) => {
    setEditedElement(element);
    setContentType('form');
  }

  const handleDeletion = (id) => {
    let newArray = [...elementInfo];
    let index = newArray.findIndex((element) => element.id === id);

    if (index >= 0 && index < newArray.length)
      newArray.splice(index, 1);

    elementInfoSetter(newArray);
  }

  const elementContent = (type) => {
    switch (type) {
      case 'display':
        return (
          <>
            {elementInfo.map(element =>
              <div className="content-element card" key={element.id}>
                <h3>{element.displayValue}</h3>
                <button onClick={() => handleEdition(element)}><ion-icon name="create-outline"></ion-icon></button>
                <button onClick={() => handleDeletion(element.id)}>
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </div>
            )}
            <button className="content-element-new card" onClick={handleNewForm}><ion-icon name="add"></ion-icon></button>
          </>
        )
      case 'form':
        return (
          <ConfigurationForm
            inputs={elementFormInputs}
            onSubmitHandler={handleFormValidation}
            onCancelHandler={handleFormCancelation}
            onInputHandler={editedElement === null ? null : handleFormInput}
            editedElement={editedElement}
          />)
      default:
        return <></>;
    }
  }

  return (
    <div className='configuration-element' id={elementName}>
      <button className="wrapper card" onClick={handleWrapperClick}>
        <h2>{elementTitle}</h2>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
      <div className="configuration-element-content">{elementContent(contentType)}</div>
    </div>
  )
}

export { ConfigurationElement }