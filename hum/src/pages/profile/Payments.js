import React,{useEffect} from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/staffLayout";
import { useNavigate } from "react-router-dom";
const Func=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
        navigate("../Staffaddpatient");
      }, []);
   
    return (
        <>updated</>
      );
}

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showInput:false, 
            ids:null,
            _id:null,
            id:null,
            username:null,
            password:null,
            patienttype:null,
            patientstatus:null,
            details:null,  
            payments:null,
            paymentstatus:null,
            data:[]
        }
        this.handleClicks = this.handleClicks.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          this.showFunctionComponent= false;
    }
    componentDidMount() {
      fetch('http://localhost:8003/allpayment')
        .then((response) => response.json())
        .then((data) => this.setState({ data }))
        .catch((error) => console.log(error));
        
    }
    componentDidUpdate(prevProps, prevState) {
      if (this.state.id !== prevState.id) {
      this.setState({ showInput: true });
   
    } 
      console.log(this.state.payments)
        if (this.state.showFunctionComponent !== prevState.showFunctionComponent) {
          console.log('showFunctionComponent updated!');
          this.handleSubmit();
        }
      }
    handleClick = (event) => {
        event.preventDefault();
        
        fetch(`http://localhost:8003/getpatient/${this.state.ids}`, {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.length > 0) {
              this.setState({
                _id: data[0]._id,
                id: data[0].id,
                username: data[0].username,
                password: data[0].password,
                patienttype: data[0].patienttype,
                patientstatus: data[0].patientstatus,
                details: data[0].details,
              });
            } else {
              throw new Error('No data found');
            }
          })
          .catch((error) => {
            console.log(error);
            alert('No data found');
          });
        
          
         
      };
      handleClicks(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
      handleButtonClick = (event) => {
        event.preventDefault();

        this.setState({ showFunctionComponent: true });
      }
      handleSubmit() {
       
        fetch('http://localhost:8003/payments', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.state.username,
            payment: this.state.payments,
            status: this.state.paymentstatus,
          }),

        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => console.log(error));
          this.state.showFunctionComponent=true;
      }
    render(){
        return <>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Patient  Payments</h6>
                    {this.state.showInput ==false && (
                    <form onSubmit={this.handleClick}>
          <div className="row">
              <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="ids" name="ids" onChange={this.handleClicks} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                  </div>
              </div>
              </div>
              <button type="submit" className="btn btn-default">Search</button>
      </form>)}
                    {this.state.showInput ==true && (
          <form onSubmit={this.handleSubmit}>
          <div className="row">
              <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" value={this.state.username}placeholder="Username" onChange={this.handleClicks} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                  </div>
              </div>
            

              <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">Patient Type</label>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" value={this.state.patienttype} onChange={this.handleClicks} placeholder="patienttype" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2">@</span>
                  </div>
              </div>
              </div>
          <div className="row">
              <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">Patient Status</label>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" value={this.state.patientstatus} onChange={this.handleClicks} placeholder="patientstatus" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                  </div>
              </div>
              <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">details</label>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" value={this.state.details} onChange={this.handleClicks} placeholder="details" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-md-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">Enter Payment</label>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" name="payments" value={this.state.payments} onChange={this.handleClicks} placeholder="Payment" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2"><i className="fa fa-mobile"></i></span>
                      
                  </div>
                  <label htmlFor="exampleInputEmail1" className="form-label">Enter Payment Status</label>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" name="paymentstatus" value={this.state.paymentstatus} onChange={this.handleClicks} placeholder="Payment Status" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2"><i className="fa fa-mobile"></i></span>
                  </div>
                  
              </div>
             
          </div>
          {this.state.showFunctionComponent && <div><Func /></div>}
          <button type="submit" className="btn btn-default">Pay</button>
      </form>
        )}
                     
                </div>
                <table className="table">
                        <thead>
                            <tr>
                                <th>username</th>
                                <th>payment</th>
                                <th>status</th>
                                <th >Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {this.state.data.map((item) => (
          
          <tr key={item.username}>
                         <td>{item.username}</td>
                         <td>{item.payment}</td>
                         <td>{item.status}</td>
                         <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href={`/paymentedit/?id=${item.username}`}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                           
                                    
                                        </ul>
                                    </div>
                                </td>
                     </tr>
   ))}
                        </tbody>
                    </table>
        </>
    }
}

export default userProfileLayout(ProfilePage);