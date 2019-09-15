import React from 'react';
import HubspotForm from 'react-hubspot-form';

export default function ContactForm() {
  return (
    <div className="form-container">
      <HubspotForm
        portalId="4223522"
        formId="04fef7ad-1dc7-4e5c-b539-085dc9b4e657"
      />
    </div>
  );
}
