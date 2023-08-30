import { useState } from "react";

function InputGroup({ id, label = '', type = 'text', placeHolder = '', autocomplete = '', onInputHandler = '', value = '' }) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type}
        placeholder={placeHolder === '' ? null : placeHolder}
        autoComplete={autocomplete === '' ? null : autocomplete}
        onInput={(event) => {
          setInputValue(event.target.value);
          onInputHandler != null && onInputHandler(event);
        }}
        value={inputValue}
      />
    </div>
  )
}

export { InputGroup }