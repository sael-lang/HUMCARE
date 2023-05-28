import React from "react";
import adminLayout from "../../hoc/patientLayout";
import "../admin.css"
class DocterDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
    componentDidMount() {
        fetch('http://localhost:8003/getData/doctor')
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
                        <h5 className=" admin pb-2 mb-0">All Doctors</h5>
                    </div>
                 
                </div>
                <p className="adminsub">
                You can view Doctors in this table
                </p>

                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Room Number</th>
                                <th>Days Available(Available in week)</th>
                                <th>Time Available</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                        {this.state.data.map((item) => (
          
          <tr key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.username}</td>
                         <td>{item.designation}</td>
                         <td>{item.roomnumber}</td>
                         <td>{item.daysavailable}</td>
                         <td>{item.timeavailable}</td>
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