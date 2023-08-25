import '../styles/Resume.css'

function Resume({ generalInfo }) {
  return (
    <div className='resume'>
      <div className='resume-general-info'>
        <h2>{generalInfo.fullName}</h2>
        <div className='contact-info-container'>
          {(generalInfo.email != '') && <div className='contact-info'><ion-icon name="mail"></ion-icon> {generalInfo.email}</div>}
          {(generalInfo.address != '') && <div className='contact-info'><ion-icon name="home"></ion-icon>{generalInfo.address}</div>}
        </div>
      </div>
    </div>
  )
}

export { Resume }