import React,{useEffect } from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/adminedit";
import { useNavigate } from "react-router-dom";
const Func=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
        navigate("../staffdetails");
      }, []);
   
    return (
        <>updated</>
      );
}
class ProfilePage extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            id:null,
            username:null,
            password:null,
            designation:null,
          };
          this.handleClick = this.handleClick.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.showFunctionComponent= false;
    }
    handleSubmit() {
        fetch('http://localhost:8003/register', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.state.id,
            username: this.state.username,
            password: this.state.password,
            designation: this.state.designation,
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
        return <>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Add Info</h6>
                        <form onSubmit={this.handleButtonClick}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Id</label>
                                    <div className="input-group mb-3">
                                        <input type="text" name="id" onChange={this.handleClick} className="form-control" placeholder="id" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                    <div className="input-group mb-3">
                                        <input type="text"  name="username" onChange={this.handleClick} className="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                    <div className="input-group mb-3">
                                        <input type="password" name="password" onChange={this.handleClick} className="form-control" placeholder="password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Designation</label>
                                    <div className="input-group mb-3">
                                        <input type="text"  name="designation" onChange={this.handleClick} className="form-control" placeholder="designation" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                            </div>
                            {this.state.showFunctionComponent && <div><Func /></div>}
                            <button type="submit" className="btn btn-default">Add Profile</button>
                        </form>
                </div>
                {/* {this.state.showFunctionComponent === true && 
     
        <div>
          <Func />
        </div>
    } */}
        </>
    }
}

export default userProfileLayout(ProfilePage);