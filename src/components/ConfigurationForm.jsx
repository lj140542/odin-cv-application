import { InputGroup } from "./InputGroup";

function ConfigurationForm({ inputs, onSubmitHandler, onCancelHandler }) {
  return (
    <form className='card configuration-form' onSubmit={onSubmitHandler}>
      {inputs.map((input, index) => {
        return <InputGroup key={index} id={input.id} label={input.label} type={input.type} placeHolder={input.placeHolder} onInputHandler={input.onInputHandler} />
      })}
      <div className="configuration-form-buttons">
        <button type="submit">Confirm</button>
        <button onClick={onCancelHandler}>Cancel</button>
      </div>
    </form>
  )
}

export { ConfigurationForm };