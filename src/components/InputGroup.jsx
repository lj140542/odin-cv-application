function InputGroup({ id, label = '', type = 'text', placeHolder = '', onInputHandler = '', autocomplete = '' }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type}
        placeholder={placeHolder === '' ? null : placeHolder}
        onInput={onInputHandler === '' ? null : onInputHandler}
        autoComplete={autocomplete === '' ? null : autocomplete}
      />
    </div>
  )
}

export { InputGroup }