import React from "react";
import adminLayout from "../hoc/staffLayout";
import "./admin.css"
class Staffaddpatient extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
    componentDidMount() {
        fetch('http://localhost:8003/getData/patient')
          .then((response) => response.json())
          .then((data) => this.setState({ data }))
          .catch((error) => console.log(error));
          
      }
      handleClick = (id) => {
        fetch(`http://localhost:8003/deletepatient/${id}`, {
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
        return (
            <>
            <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">Patient Table</h5>
                    </div>
                </div>
                <p className="adminsub">
                You can add,edit,view and delete Patient in this table
                </p>

                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Patient Type</th>
                                <th>Patient Status</th>
                                <th>Details</th>
                                <th ><a href="/staffadd">ADD</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {this.state.data.map((item) => (
          
          <tr key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.username}</td>
                         <td>{item.password}</td>
                         <td>{item.patienttype}</td>
                         <td>{item.patientstatus}</td>
                         <td>{item.details}</td>
                         <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href={`/staffedit/?id=${item.id}`}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
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
          );
    }
}

export default adminLayout(Staffaddpatient);