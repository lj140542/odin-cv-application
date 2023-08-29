const getNewID = (array) => {
  let maxId = 0;
  array.forEach(item => {
    if (item.id > maxId) maxId = item.id;
  });
  return maxId + 1;
}

const checkValidity = (element) => {
  let label = null;

  if (element.value === '') {
    if (element.labels.length > 0) {
      label = element.labels[0];
      label.innerHTML = label.innerHTML[0] === '*' ? label.innerHTML : `* ${label.innerHTML}`;
    }
    element.placeholder = 'Please insert a value';
    element.classList.add('error');
  }

  return (element.value !== '');
}

const handleNewForm = (callback) => callback('form');

const handleFormCancelation = (event, callback) => {
  event.preventDefault();
  callback('display');
}

const handleWrapperClick = (event, wrapper) => {
  let content = wrapper.querySelector('.content');
  let button = wrapper.querySelector('.wrapper-toggle');
  let icon = button.querySelector('ion-icon');
  let isOpen = false;

  content.classList.toggle('open');
  isOpen = content.classList.contains('open');
  button.classList.toggle('open', isOpen);
  icon.classList.toggle('open', isOpen);
}

export { getNewID, checkValidity, handleNewForm, handleFormCancelation, handleWrapperClick };