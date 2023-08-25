function InputGroup({ id, label = '', type = 'text', placeHolder = '', onInputHandler = '' }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeHolder} onInput={onInputHandler} />
    </div>
  )
}

export { InputGroup }