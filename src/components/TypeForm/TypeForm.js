import React from 'react'
import HubspotForm from 'react-hubspot-form'

const TypeForm = () => {
    return (
        <div className="typeform d-flex justify-content-center align-items-center">
        <HubspotForm
           portalId='5839192'
           formId='479c02a3-6680-465f-8a47-ab86970952ca'
           onSubmit={() => console.log('Submit!')}
           onReady={(form) => console.log('Form ready!')}
           loading={<div>Loading...</div>}
        />
        </div>
    )
}

export default TypeForm
