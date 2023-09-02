import '../styles/Resume.css'

function Resume({ generalInfo, educationalInfo, professionalInfo }) {
  const getDate = (date) => new Date(date).toLocaleDateString("en-en", { year: "numeric", month: "long" });

  return (
    <div className='resume'>
      <div className='resume-general-info'>
        <h2>{generalInfo.fullName}</h2>
        <div className='contact-info-container'>
          {(generalInfo.email != '') && <div className='contact-info'><ion-icon name='mail' />{generalInfo.email}</div>}
          {(generalInfo.address != '') && <div className='contact-info'><ion-icon name='home' />{generalInfo.address}</div>}
        </div>
      </div>
      {(educationalInfo.length > 0) &&
        <section className='resume-section'>
          <div className='resume-section-title-container'>
            <h2 className='resume-section-title'>Education</h2>
            <span className='resume-section-title-line' />
          </div>
          <div className="resume-section-content-container">
            {educationalInfo.map(education => {
              return (
                <div className='resume-section-content' key={education.id}>
                  <div className='resume-section-content-date'>{getDate(education.studyDate)}</div>
                  <div>
                    <span className='resume-section-content-title'>{education.studyTitle}</span><br />
                    <span className='resume-section-content-info'>{education.schoolName}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      }
      {(professionalInfo.length > 0) &&
        <section className='resume-section'>
          <div className='resume-section-title-container'>
            <h2 className='resume-section-title'>Profession</h2>
            <span className='resume-section-title-line' />
          </div>
          <div className="resume-section-content-container">
            {professionalInfo.map(profession => {
              return (
                <div className='resume-section-content' key={profession.id}>
                  <div className='resume-section-content-date'>
                    {getDate(profession.startingDate)}
                    {(profession.endingDate !== '') && <><br />{getDate(profession.endingDate)}</>}
                  </div>
                  <div>
                    <span className='resume-section-content-title'>{profession.positionTitle}</span><br />
                    <span className='resume-section-content-info'>{profession.companyName}</span><br />
                    <span className="resume-section-content-description">{profession.jobDescription}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      }
    </div>
  )
}

export { Resume }