import React from "react";
import adminLayout from "../hoc/patientLayout"
import "./admin.css"
import image from '../assets/images/doctor.png'
import image1 from '../assets/images/histroy.png'
import image3 from '../assets/images/payment.png'
import image5 from '../assets/images/report.png'
import image6 from '../assets/images/schedule.png'
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
        <div className="admin">Patient Panel</div>
            <div className="row">
        <div className="col-xl-3 col-sm-6  mb-3">
          <a  href="/patientdoctor">
          <div style={color} className="card text-black  o-hidden doctors">
            <div className="card-body">
            <img style={imageStyle}   src={image}/>
              <div style={textStyle} className="mr-5">Doctors</div>
            </div>
          </div>
          </a>
        </div>  <div className="col-xl-3 col-sm-6  mb-3">
          <a  href="/payments1">
          <div style={color} className="card text-black  o-hidden doctors">
            <div className="card-body">
            <img style={imageStyle}   src={image3}/>
              <div style={textStyle} className="mr-5">Payments</div>
            </div>
          </div>
          </a>
        </div>
       
         <div className="col-xl-3 col-sm-6  mb-3">
          <a  href="/histroy">
          <div style={color} className="card text-black  o-hidden doctors">
            <div className="card-body">
            <img style={imageStyle}   src={image1}/>
              <div style={textStyle} className="mr-5">History</div>
            </div>
          </div>
          </a>
        </div>
        <div className="col-xl-3 col-sm-6  mb-3">
          <a href="/showreport">
          <div style={color} className="card text-black  o-hidden doctors">
            <div className="card-body">
            <img style={imageStyle}   src={image5}/>
              <div style={textStyle} className="mr-5">Report</div>
            </div>
          </div>
          </a>
        </div>
        <div className="col-xl-3 col-sm-6  mb-3">
          <a href="/appointments">
          <div style={color} className="card text-black  o-hidden doctors">
            <div className="card-body">
            <img style={imageStyle}   src={image6}/>
              <div style={textStyle} className="mr-5">Appointment</div>
            </div>
          </div>
          </a>
        </div>
        </div> 
        </>
    }
}

export default adminLayout(DashboardPage);