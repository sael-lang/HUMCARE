import React from "react";
import adminLayout from "../hoc/adminLayout"
import "./admin.css"
import image from '../assets/images/doctor.png'
import image1 from '../assets/images/patient.png'
import image2 from '../assets/images/group.png'
const imageStyle = {
  height: '70px',
  width: '80px',
  display: 'block',
  margin: '10vh auto 10px auto',
};
const color={  backgroundColor: '#f2f2f2',}
const textStyle = {
  textAlign: 'center',
  fontSize: '26px',
  fontWeight: 'bold',
};

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
        <div className="admin">Admin Panel</div>
            <div className="row">
        <div className="col-xl-3 col-sm-6  mb-3">
          <a href="/docterdetails">
          <div style={color} className="card text-black  o-hidden doctors">
            <div className="card-body">
            <img style={imageStyle}   src={image}/>
              <div style={textStyle} className="mr-5">  Doctors</div>
            </div>
          </div>
          </a>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <a href="/patientdetails" >
          <div  style={color} className="card text-black   o-hidden doctors" >
            <div className="card-body">
            <img style={imageStyle}   src={image1}/>
              <div style={textStyle} className="mr-5">Patients</div>
            </div>
          </div>
          </a>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <a  href="/staffdetails">
          <div  style={color} className="card text-black o-hidden doctors" >
            <div className="card-body">
            <img style={imageStyle}   src={image2}/>
              <div  style={textStyle} className="mr-5">Staff</div>
            </div>
          </div>
          </a>
        </div>
        
      </div>
        </>
    }
}

export default adminLayout(DashboardPage);