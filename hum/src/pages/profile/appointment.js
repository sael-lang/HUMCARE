import React,{useEffect } from "react";
import "../../assets/css/profile.css"
import { connect } from "react-redux";
import userProfileLayout from "../../hoc/patientLayout";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Func=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
        navigate("../patientdashboard");
      }, []);
   
    return (
        <>updated</>
      );
}
class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            roomnumber:null,
            available:null,
            patientassigned:null,
            doctorassigned:null,
            daysavailable:null,
            timeavailable:null,
            data: [],
            notdata :[]
          };
          this.handleClick = this.handleClick.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.showFunctionComponent= false;
    }
    componentDidMount() {
      fetch('http://localhost:8003/getData/doctor')
        .then((response) => response.json())
        .then((data) => this.setState({ data }))
        .catch((error) => console.log(error));
        fetch(`http://localhost:8003/showpatientappoint/${this.props.username}`)
        .then((response) => response.json())
        .then((data) => this.setState({ notdata:data }))
        .catch((error) => console.log(error));
         
    }
    handleSubmit() {
        fetch('http://localhost:8003/patientappointment', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patientassigned: this.props.username,
            doctorassigned: this.state.doctorassigned,
            daysavailable: this.state.daysavailable,
            timeavailable: this.state.timeavailable,
          }),

        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => console.log(error));
          this.state.showFunctionComponent=true;
      }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.showFunctionComponent !== prevState.showFunctionComponent) {
          console.log('showFunctionComponent updated!');
          this.handleSubmit();
        }
      }
    handleClick(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
      handleButtonClick = (event) => {
        event.preventDefault();

        this.setState({ showFunctionComponent: true });
      }
    render(){
        return<>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0 mb-3">Make Appointment</h6>
                <form onSubmit={this.handleButtonClick}>
                    
                    <div className="row">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1" className="form-label">Your Name </label>
                            <div className="input-group mb-3">
                                <input type="text" name="patientassigned" value={this.props.username} className="form-control" placeholder="patientassigned" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                            </div>
                        </div>
                        <div className="col">
  <label htmlFor="exampleInputEmail1" className="form-label">Doctor</label>
  <div className="input-group mb-3">
    <select
      name="doctorassigned"
      onChange={this.handleClick}
      className="form-select"
      aria-label="Select doctor"
    >
      <option value="">Select doctor</option>
      {this.state.data.map((item) => (
        <option key={item.id} value={item.username}>{item.username}</option>
      ))}
    </select>
    <span className="input-group-text" id="basic-addon2">
      <i className="fa fa-user"></i>
    </span>
  </div>
</div>

                    </div>
                    <div className="row">
                    <div className="col">
  <label htmlFor="exampleInputEmail1" className="form-label">Date</label>
  <div className="input-group mb-3">
      <DatePicker
        selected={this.state.daysavailable} // Pass the selected date value from your component's state
        onChange={date => this.setState({ daysavailable: date })} 
        value={this.state.daysavailable}
        dateFormat="yyyy-MM-dd"
        showTimeSelect={false} 
        className="form-control"
        placeholderText="Date"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
    </div>
  </div>
                        <div className="col">
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1" className="form-label">Time</label>
                            <div className="input-group mb-3">
                                <input type="text" name="timeavailable" onChange={this.handleClick} className="form-control" placeholder="Time" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                            </div>
                        </div>
                        <div className="col">
                         
                        </div>
                    </div>
                    {this.state.showFunctionComponent && <div><Func /></div>}
                    <button type="submit" className="btn btn-default">Make</button>
                </form>
        </div>
        <p className="adminsub">
                You can see your appointments in this table
                </p>
        <table className="table">
                        <thead>
                            <tr>
                                <th>Room Number</th>
                                <th>Available</th>
                                <th>patient Assigned</th>
                                <th>Doctor Assigned</th>
                                <th>Date</th>
                                <th>Room Detail</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.notdata.map((item) => (
              
              <tr key={item.Roomnumber}>
                             <td>{item.Roomnumber}</td>
                             <td>{item.available}</td>
                             <td>{item.patientassigned}</td>
                             <td>{item.doctorassigned}</td>
                             <td>{item.daysavailable}</td>
                             <td>{item.timeavailable}</td>
                             <td>{item.time}</td>
                         </tr>
       ))}
                 
                        </tbody>
                    </table>
</>
    }
}
const mapStateToProps = (state) => ({
  username:state.username
});
export default  connect(mapStateToProps)(userProfileLayout(ProfilePage));