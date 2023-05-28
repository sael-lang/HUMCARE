import React from "react";
import adminLayout from "../../hoc/patientLayout";
import "../../pages/admin.css"
import { connect } from "react-redux";
class DocterDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
    componentDidMount() {
        fetch(`http://localhost:8003/getpatientss/${this.props.username}`)
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
                        <h5 className=" admin pb-2 mb-0">Patient Table</h5>
                    </div>
                </div>
                <p className="adminsub">
                You can view your histroy in this table
                </p>

                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
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
const mapStateToProps = (state) => ({
    username:state.username
  });
export default adminLayout(connect(mapStateToProps)(DocterDetails));