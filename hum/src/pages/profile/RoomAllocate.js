import React from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/staffLayout";

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
          };
        }
        componentDidMount() {
          fetch('http://localhost:8003/showroom')
            .then((response) => response.json())
            .then((data) => this.setState({ data }))
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
        
    }

    render(){
        return <>
                 <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">Room Available</h5>
                    </div>
                   
                </div>
                <p className="adminsub">
                You can Allocate room in this table
                </p>

                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Room Number</th>
                                <th>Available</th>
                                <th>patient Assigned</th>
                                <th>Doctor Assigned</th>
                                <th>Date</th>
                                <th>Room Detail</th>
                                <th ><a href="/roomadd">Add Room</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.data.map((item) => (
              
              <tr key={item.Roomnumber}>
                             <td>{item.Roomnumber}</td>
                             <td>{item.available}</td>
                             <td>{item.patientassigned}</td>
                             <td>{item.doctorassigned}</td>
                             <td>{item.daysavailable}</td>
                             <td>{item.timeavailable}</td>
                             <td>
                                        <div className="dropdown table-action-dropdown">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                                <li><a className="dropdown-item" href={`/roomedit/?id=${item.Roomnumber}`}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
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
          
                               </div>
        </>
    }
}

export default userProfileLayout(ProfilePage);