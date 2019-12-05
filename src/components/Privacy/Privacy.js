import React from 'react'
import SectionLink from '../SectionLink'
import yellow1 from 'assets/img/yellow1.png'
const Privacy = () => {
    return (
        <div className="privacy">
            <h2 className="privacy__title">Complete the survey below to join one of our trials and <br />
            get up to 6 months of free skincare.</h2>
            <h5 className="privacy__description">We understand we are asking for sensitive and <br/> private information, and we never share any of it<br/> with any third parties. Ever! </h5>
            <SectionLink className="privacy__sectionlink" text="Privacy Policy" image={yellow1} />
        </div>
    )
}

export default Privacy
