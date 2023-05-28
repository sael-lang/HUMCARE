import React from "react";
import "../assets/css/profile.css"
import userProfileLayout from "../hoc/patientLayout";
import { connect } from "react-redux";
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
    componentDidMount() {
        fetch(`http://localhost:8003/getpayment/${this.props.username}`)
          .then((response) => response.json())
          .then((data) => this.setState({ data }))
          .catch((error) => console.log(error));
          
      }
    render(){
       console.log()
       return <>
       <div className="table-container">
         <div className="row">
           <div className="col">
             <h5 className="admin pb-2 mb-0">Payments Due</h5>
           </div>
         </div>
         <div className="adminsub"></div>
         <div>Your payment is </div>
         <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Payment</th>
                                <th>Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                        {this.state.data.map((item) => (
          
          <tr key={item.username}>
                         <td>{item.username}</td>
                         <td>{item.payment}</td>
                         <td>{item.status}</td>
                     </tr>
   ))}
                        </tbody>
                    </table>
       </div>
     </>;
     
    }
}
const mapStateToProps = (state) => ({
    username:state.username
  });
export default userProfileLayout(connect(mapStateToProps)(ProfilePage));