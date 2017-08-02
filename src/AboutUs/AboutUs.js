import React from 'react';
import DATA from './DATA';
import CompanyDetails from './CompanyDetails'

const about = DATA.company.map(function(item){
  return (
    <div className="title">
      <h1>{item.title}</h1>
    </div>
  )
})



class AboutUs extends React.Component {
  render(){
  return (
      <div>
        {about}
        <CompanyDetails data={DATA}/>
      </div>


  )
  }
}

export default AboutUs;
