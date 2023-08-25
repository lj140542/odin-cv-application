import { InputGroup } from './InputGroup'

function General({ generalInfo, generalInfoSetter }) {
  const handleFullNameChange = (fullName) => {
    generalInfoSetter({ ...generalInfo, fullName: fullName })
  }
  const handleEmailChange = (email) => {
    generalInfoSetter({ ...generalInfo, email: email })
  }
  const handleAddressChange = (address) => {
    generalInfoSetter({ ...generalInfo, address: address })
  }

  return (
    <div className='general card'>
      <h2>General Informations</h2>
      <InputGroup id='fullname' label='Full name' placeHolder='First and last name' onInputHandler={(e) => handleFullNameChange(e.target.value)} />
      <InputGroup id='email' label='Email' type='email' placeHolder='example@email.com' onInputHandler={(e) => handleEmailChange(e.target.value)} />
      <InputGroup id='address' label='Address' placeHolder='City, Country' onInputHandler={(e) => handleAddressChange(e.target.value)} />
    </div>
  )
}

export { General }