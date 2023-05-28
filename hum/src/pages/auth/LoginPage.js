import React,{useEffect} from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import { connect } from "react-redux";
import { updateRole,updateUser } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
const Func1=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
        navigate("../admindashboard");
      }, []);
   
    return (
        <>updated</>
      );
}
const Func2=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
        navigate("../staffdashboard");
      }, []);
   
    return (
        <>updated</>
      );
}
const Func3=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
        navigate("../docterdashboard");
      }, []);
      return (
        <>updated</>
      );
    }
      const Func=()=>{
        const navigate = useNavigate("");
        useEffect(() => {
            navigate("../patientdashboard");
          }, []);
    return (
        <>updated</>
      );
}

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username:null,
                password:null,
                login:null
          };
         
          this.handleClick = this.handleClick.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.showFunctionComponent= 0;
    }
    handleSubmit() {
        fetch('http://localhost:8003/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }),

        })
          .then((response) => response.json())
          .then((json) => {this.setState({ login:json[0].role})
          this.props.updateUser(json[0].username);
        })
          .catch((error) => alert("Invalid credentials"));
          
      }
      componentDidUpdate(prevProps, prevState) {
        if (this.state.login !== prevState.login) {
            console.log( this.state.login)
            this.handleUpdateRole( this.state.login)
            this.handleButtonClick(this.state.login)
        }
      }
    handleClick(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
      handleUpdateRole = (role) => {
        // Update the "role" key in the Redux store with the new value
        this.props.updateRole(role);
      };
      handleButtonClick = (value) => {
        
        this.setState({ showFunctionComponent: value });
      }
    render(){
        return <>
            <form className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Username</label>
                    <input type="email" id="form3Example3" name="username" onChange={this.handleClick} value={this.state.username} className="form-control form-control-lg"
                    placeholder="Enter your Username" required/>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" name="password" onChange={this.handleClick} value={this.state.password} className="form-control form-control-lg"
                    placeholder="Enter password" required/>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    
                </div>
                {this.state.showFunctionComponent=='patient' && <div><Func /></div>}
                {this.state.showFunctionComponent=='admin' && <div><Func1 /></div>}
                {this.state.showFunctionComponent=='staff' && <div><Func2 /></div>}
                {this.state.showFunctionComponent=='doctor' && <div><Func3 /></div>}
                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link onClick={this.handleSubmit} type="button" className="btn btn-primary btn-lg">Login</Link>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                        className="link-danger">Register(for Patients)</a></p>
                </div>
            </form>
        </>
    }
}
const mapStateToProps = (state) => ({
  role: state.role,
  username: state.username,
});

const mapDispatchToProps = {
  updateRole,
  updateUser,
};


export default authLayout( connect(mapStateToProps, mapDispatchToProps)(LoginPage));