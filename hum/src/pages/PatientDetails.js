import React from "react";
import adminLayout from "../hoc/adminLayout";
import "./admin.css"
import AdminEdit from '../hoc/adminedit';
class DocterDetails extends React.Component {
    
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

    render(){
        return (
            <>
            <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">Patients Table</h5>
                    </div>
                    <div className="col text-right">
                        <button className="btn btn-default low-height-btn">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <p className="adminsub">
                You can view Patient in this table
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

export default adminLayout(DocterDetails);