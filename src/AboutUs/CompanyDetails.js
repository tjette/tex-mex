import React from 'react';
import DATA from './DATA'

const CompanyDetails = (props) => {
  return(
    <div className="companyDetails">
      <h3>Address: {props.data.address.street}</h3>
      <h3>Suite: {props.data.address.suite}</h3>
      <h3>City: {props.data.address.city}</h3>
      <h3>State: {props.data.address.state}</h3>
      <h3>Zip: {props.data.address.zip}</h3>

    </div>
  )
}

export default CompanyDetails;
