import React from "react";
import "../assets/css/profile.css"
import userProfileLayout from "../hoc/staffLayout";

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            notdata:[],
            roomnumber:null,
          };
          this.handleChange = this.handleChange.bind(this);
        }
        handleSubmit() {
            fetch('http://localhost:8003/addroom', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                Roomnumber: this.state.roomnumber,
                available: this.state.available,
                patientassigned: this.state.patientassigned,
                doctorassigned: this.state.doctorassigned,
                daysavailable: this.state.daysavailable,
                time: this.state.timeavailable,
              }),
    
            })
              .then((response) => response.json())
              .then((json) => console.log(json))
              .catch((error) => console.log(error));
              this.state.showFunctionComponent=true;
          }
          delete(id){ fetch(`http://localhost:8003/patientappointment/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
              },
          })
            .then(response => {
              if (response.ok) {
                window.location.reload();
              }
            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });}
          add(available,patientassigned,doctorassigned,daysavailable,timeavailable,id) {
            fetch('http://localhost:8003/addroom', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                Roomnumber: this.state.roomnumber,
                available: available,
                patientassigned: patientassigned,
                doctorassigned: doctorassigned,
                daysavailable: daysavailable,
                timeavailable: timeavailable,
              }),
    
            })
              .then((response) => response.json())
              .then((json) => console.log(json))
              .catch((error) => console.log(error));
              this.delete(id);
          }
        componentDidMount() {
          fetch('http://localhost:8003/showroom')
            .then((response) => response.json())
            .then((data) => this.setState({ data:data }))
            .catch((error) => console.log(error));
            fetch('http://localhost:8003/getpatientappointment')
            .then((response) => response.json())
            .then((data) => this.setState({ notdata:data }))
            .catch((error) => console.log(error));
        }
        handleClick = (id) => {
          fetch(`http://localhost:8003/deleteroom/${id}`, {
              method: 'DELETE',
              headers: {
                  "Content-Type": "application/json",
                },
            })
              .then(response => {
                if (response.ok) {
                  window.location.reload();
                }
              })
              .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
              });
              this.handleClicks=(event)=> {
                const { name, value } = event.target;
                this.setState({ [name]: value });
              }
    }
    handleChange(event) {
        this.setState({ roomnumber: event.target.value });
      }
    render(){
        return <>
                 <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">Appointments</h5>
                    </div>
                   
                </div>
                
                <p className="adminsub">
                You can make appointment  in this table
                </p>

                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>Doctor </th>
                            <th>Patient </th>
                                <th>Room Number</th>
                                <th>Room Available</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th ><a href="/appointmentadd">Make Appointment</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.data.map((item) => (
              
              <tr key={item.Roomnumber}>
                            
                            
                             <td>{item.doctorassigned}</td>
                             <td>{item.patientassigned}</td>
                             <td>{item.Roomnumber}</td>
                             <td>{item.available}</td>
                             <td>{item.daysavailable}</td>
                             <td>{item.time}</td>
                             <td>
                                        <div className="dropdown table-action-dropdown">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                                <li><a className="dropdown-item" href={`/appointmentedit/?id=${item.Roomnumber}`}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a  onClick={() => this.handleClick(item._id)} className="dropdown-item text-danger" ><i className="fa fa-trash" aria-hidden="true"></i >&nbsp;Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                         </tr>
       ))}
                 
                        </tbody>
                    </table>
                </div>
                <p className="adminsub">
                You can see patient's appointment  in this table
                </p>

                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>Doctor name </th>
                            <th>Patient name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Room Number</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.notdata.map((item) => (
              
              <tr key={item.doctorassigned}>
              <td>
                  <input
                      type="text"
                      value={item.doctorassigned}
                       className="form-control"
                  />
              </td>
              <td>
                  <input
                      type="text"
                      value={item.patientassigned}
                       className="form-control"
                  />
              </td>
              <td>
                  <input
                      type="text"
                      value={item.daysavailable}
                       className="form-control"
                  />
              </td>
              <td>
                  <input
                      type="text"
                      value={item.timeavailable}
                       className="form-control"
                  />
              </td> <td>
                  <input
                      type="text"
                     
                     className="form-control"
                     onChange={this.handleChange}
                  />
              </td>
              <td>
        <div className="btn-group">
            <button type="button" onClick={() => this.add("NO",item.patientassigned,item.doctorassigned,item.daysavailable,item.timeavailable,item._id)} className="btn btn-success">Accept</button>
            <button type="button" onClick={() => this.delete(item._id)} className="btn btn-danger">Decline</button>
        </div>
    </td>
          </tr>
          
       ))}
                 
                        </tbody>
                    </table>
                </div>
          
                               </div>
        </>
    }
}

export default userProfileLayout(ProfilePage);