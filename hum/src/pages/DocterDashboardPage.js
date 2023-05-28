import React from "react";
import "./admin.css"
import { Buffer } from 'buffer';
import adminLayout from "../hoc/docterLayout"
import "./../assets/css/profile.css"
import "../pages/admin.css"
import images from '../assets/images/icon.webp'
import { connect } from "react-redux";

const styles = {
  marginLeft:'7vw'
};
const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width:'100vw',
};
class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = { data: [],chnage:null}
    }
    
    componentDidMount() {
      fetch(`http://localhost:8003/getrooms/${this.props.username}`)
        .then((response) => response.json())
        .then((data) => this.setState({ data }))
        .catch((error) => console.log(error));
        
    }
    functions=()=>{
      this.setState({ chnage: "1" });
    }
    functionss=()=>{
      this.setState({ chnage: "2" });
    }
    render(){
        return <>
        <div className="admin ">Doctors Panel</div>
           
              <div>Patients</div>
                <div style={containerStyle} className="row profile">
                            
                            {this.state.data.map((item) => (
          
          <div key={item.Roomnumber}>
            <div className="col-md-3">
                            <div className="profile-sidebar">
                                <div className="my-3 p-3 bg-body rounded shadow-sm">

                                {/* <!-- SIDEBAR USERPIC --> */}
                            <div className="profile-userpic">
                                <img src={images} className="img-responsive profile-img-center" alt="" />
                            </div>
                            {/* <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE --> */}
                            <div className="profile-usertitle">
                          
                                <div className="profile-usertitle-name">
                               Name: {item.patientassigned}
                                </div>
                                <div className="profile-usertitle-job">
                                Date:{item.daysavailable}
                                </div>
                                <div className="profile-usertitle-job">
                               Time: {item.timeavailable}
                                </div>
                                <div className="profile-usertitle-job">
                               Room Number {item.Roomnumber}
                                </div>
                            </div>
                         
                            <button onClick={this.functions} className="buttonsss"> Show Patient data    </button>  
                            
                            <button onClick={this.functionss} className="buttonsss"> Show Patient Report </button>       
                            </div>
                            
                            
                            </div>
                            </div>
                         
                            {this.state.chnage == "1" && <ChildComponent username={item.patientassigned} />}
                            {this.state.chnage == "2" && <ChildComponent1 username={item.patientassigned} />} 
                     </div>
                     
   ))}
   
                        </div>

        </>
    }
}

class ChildComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = { data: [],}
}
  componentDidMount() {
    fetch(`http://localhost:8003/getpatients/${this.props.username}`)
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.log(error));
      
  }
  render() {
    
    return (
   <>
       {this.state.data.map((item) => (
          
          <div key={item.id}>
            <div className="col-md-3">
                            <div className="profile-sidebar d-flex flex-row">
                                <div className="my-3 p-3 bg-body rounded shadow-sm">

                               
                            <div className="profile-usertitle">
                          
                                <div className="profile-usertitle-name">
                                id: {item.id}
                                </div>
                                <div className="profile-usertitle-job">
                                username:{item.username}
                                </div>
                                <div className="profile-usertitle-job">
                                patienttype: {item.patienttype}
                                </div>
                                <div className="profile-usertitle-job">
                                patientstatus {item.patientstatus}
                                </div>
                                <div className="profile-usertitle-job">
                                details {item.details}
                                </div>
                            </div>
                          
                            </div>
                            
                            
                            </div>
                            </div>
                        
                     </div>
                     
   ))}



   </>
    );
  }
}
class ChildComponent1 extends React.Component {
  constructor(props){
    super(props);

    this.state = { data: [],}
}
  componentDidMount() {
    fetch(`http://localhost:8003/file/${this.props.username}`)
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.log(error));
      
  }
  render() {
    return (
      <>
      <div className="App">
        <h1 >Report:</h1>
        {this.state.data.map((singleData) => {
          const base64String = Buffer.from(singleData.data, 'binary').toString('base64');
          return (
            <img
              key={singleData._id}
              src={`data:${singleData.contentType};base64,${base64String}`}
              alt={singleData.name}
              width="300"
              style={styles} 
            />
          );
        })}
      </div>
    </>
    
    );
  }
}
const mapStateToProps = (state) => ({
  username:state.username
});
export default adminLayout(connect(mapStateToProps)(DashboardPage));