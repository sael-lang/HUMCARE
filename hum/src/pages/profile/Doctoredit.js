import React,{useEffect} from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/adminedit";
import { useNavigate } from "react-router-dom";
import  "./edit.css"
const Func=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
      
        navigate("../staffadddoctor");
        window.location.reload();
      }, []);
   
    return (
        <>updated</>
      );
}

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            _id:null,
            id:null,
            username:null,
            password:null,
            designation:null,
            roomnumber:null,
            daysavailable:null,
            timeavailable:null
        }
        this.handleClick = this.handleClick.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.showFunctionComponent= false;
    }
    handleSubmit() {
        fetch(`http://localhost:8003/updatedoctor/${this.state._id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.state.id,
            username: this.state.username,
            password: this.state.password,
            designation: this.state.designation,
            roomnumber: this.state.roomnumber,
            daysavailable: this.state.daysavailable,
            timeavailable: this.state.timeavailable,
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
            this.handleSubmit();}
      }
    componentDidMount() {
      const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
fetch(`http://localhost:8003/getdoctor/${id}`)
          .then((response) => response.json())
          .then(data => {
            this.setState({ 
                _id:data[0]._id,
                id:data[0].id,
                username:data[0].username,
                password:data[0].password,
                designation:data[0].designation,
                roomnumber:data[0].roomnumber,
                daysavailable:data[0].daysavailable,
                timeavailable:data[0].timeavailable,
             });
          })
          .catch((error) => console.log(error));
      }
      handleButtonClick = (event) => {
        event.preventDefault();
        this.setState({ showFunctionComponent: true });
      }
      handleClick(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
    render(){
        return <>
                <div className="outerbox">
                    
                        <form className="bigbox" onSubmit={this.handleButtonClick}>
                        <h6 className="toptext  ">Edit Info</h6>
                            <div className="flexbox">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor  rightspace">Id</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input bottomspace rightspace " name="id" onChange={this.handleClick} value={this.state.id} placeholder="id" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor leftspace">username</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input  bottomspace leftspace " name="username" onChange={this.handleClick} value={this.state.username}  placeholder="username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox topspace">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor rightspace">password</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input  bottomspace rightspace " name="password" onChange={this.handleClick} value={this.state.password}placeholder="password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor leftspace">designation</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input bottomspace leftspace " name="designation" onChange={this.handleClick} value={this.state.designation} placeholder="designation" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    </div>
                                </div>
                            </div> 
                            <div className="flexbox topspace">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor rightspace">Room Number</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input  bottomspace rightspace " name="roomnumber" onChange={this.handleClick} value={this.state.roomnumber}placeholder="roomnumber" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor leftspace">Days Available</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input bottomspace leftspace " name="daysavailable" onChange={this.handleClick} value={this.state.daysavailable} placeholder="daysavailable" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox topspace">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor rightspace">Time Available</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input  bottomspace rightspace " name="timeavailable" onChange={this.handleClick} value={this.state.timeavailable}placeholder="timeavailable" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                <div className="col">
                                    
                                </div>
                            </div>   
                            {this.state.showFunctionComponent && <div><Func/></div>}     
                            <button type="submit" className="buttons">Edit Profile</button>
                        </form>
                </div>
            
        </>
    }
}

export default (ProfilePage);