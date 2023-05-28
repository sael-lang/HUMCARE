import React,{useEffect} from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/adminedit";
import { useNavigate } from "react-router-dom";
import  "./edit.css"
const Func=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
      
        navigate("../roomallocate");
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
            roomnumber:null,
            available:null,
            patientassigned:null,
            doctorassigned:null,
            daysavailable:null,
            timeavailable:null,
        }
        this.handleClick = this.handleClick.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.showFunctionComponent= false;
    }
    handleSubmit() {
        fetch(`http://localhost:8003/updateroom/${this.state._id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Roomnumber: this.state.roomnumber,
            available: this.state.available,
            patientassigned: this.state.patientassigned,
            doctorassigned: this.state.doctorassigned,
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
fetch(`http://localhost:8003/getroom/${id}`)
          .then((response) => response.json())
          .then(data => {
            this.setState({ 
                _id:data[0]._id,
                roomnumber:data[0].Roomnumber,
                available:data[0].available,
                patientassigned:data[0].patientassigned,
                doctorassigned:data[0].doctorassigned,
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
                                    <label htmlFor="exampleInputEmail1" className="inputcolor  rightspace">roomnumber</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input bottomspace rightspace " name="roomnumber" onChange={this.handleClick} value={this.state.roomnumber} placeholder="roomnumber" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flexbox topspace">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor rightspace">Available</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input  bottomspace rightspace " name="available" onChange={this.handleClick} value={this.state.available}placeholder="available" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor leftspace">Doctor Assigned</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input bottomspace leftspace " name="doctorassigned" onChange={this.handleClick} value={this.state.doctorassigned} placeholder="doctorassigned" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    </div>
                                </div>
                            </div> 
                            <div className="flexbox topspace">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor rightspace">Date</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input  bottomspace rightspace " name="date" onChange={this.handleClick} value={this.state.daysavailable}placeholder="daysavailable" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor leftspace">Room Detail </label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input bottomspace leftspace " name="Room Detail" onChange={this.handleClick} value={this.state.timeavailable} placeholder="timeavailable" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    </div>
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