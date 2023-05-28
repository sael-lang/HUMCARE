import React from "react";
import adminLayout from "../hoc/staffLayout"
import "./admin.css"
import image from '../assets/images/doctor.png'
import image1 from '../assets/images/patient.png'
import image3 from '../assets/images/payment.png'
import image4 from '../assets/images/room.png'
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
        <div className="admin">Staff Panel</div>
            <div className="row">
            <div className="col-xl-3 col-sm-6  mb-3">
          <a  href="/staffadddoctor">
          <div style={color} className="card text-black  o-hidden doctors">
            <div className="card-body">
            <img style={imageStyle}   src={image}/>
              <div style={textStyle} className="mr-5">  Doctors</div>
            </div>
          </div>
          </a>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <a href="/Staffaddpatient" >
          <div  style={color} className="card text-black   o-hidden doctors" >
            <div className="card-body">
            <img style={imageStyle}   src={image1}/>
              <div style={textStyle} className="mr-5">Patients</div>
            </div>
          </div>
          </a>
        </div>
       
        <div className="col-xl-3 col-sm-6 mb-3">
          <a  href="/payments" >
          <div  style={color} className="card text-black   o-hidden doctors" >
            <div className="card-body">
            <img style={imageStyle}   src={image3}/>
              <div style={textStyle} className="mr-5">Payments</div>
            </div>
          </div>
          </a>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <a href="/roomallocate" >
          <div  style={color} className="card text-black   o-hidden doctors" >
            <div className="card-body">
            <img style={imageStyle}   src={image4}/>
              <div style={textStyle} className="mr-5">Room Details</div>
            </div>
          </div>
          </a>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <a href="/report" >
          <div  style={color} className="card text-black   o-hidden doctors" >
            <div className="card-body">
            <img style={imageStyle}   src={image5}/>
              <div style={textStyle} className="mr-5">Upload Report</div>
            </div>
          </div>
          </a>
        </div> 
      
        <div className="col-xl-3 col-sm-6 mb-3">
          <a href="/appointment" >
          <div  style={color} className="card text-black   o-hidden doctors" >
            <div className="card-body">
            <img style={imageStyle}   src={image6}/>
              <div style={textStyle} className="mr-5">Get Appointment</div>
            </div>
          </div>
          </a>
        </div>
        </div>
        </>
    }
}

export default adminLayout(DashboardPage);