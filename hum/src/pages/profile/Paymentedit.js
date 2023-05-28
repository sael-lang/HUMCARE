import React,{useEffect} from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/adminedit";
import { useNavigate } from "react-router-dom";
import  "./edit.css"
const Func=()=>{
    const navigate = useNavigate("");
    useEffect(() => {
      
        navigate("../payments");
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
            username:null,
            payment :null,
            status:null,
        }
        this.handleClick = this.handleClick.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.showFunctionComponent= false;
    }
    handleSubmit() {
        fetch(`http://localhost:8003/updatepayment/${this.state._id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.state.username,
            payment: this.state.payment,
            status: this.state.status,
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
fetch(`http://localhost:8003/getpayment/${id}`)
          .then((response) => response.json())
          .then(data => {
            this.setState({ 
                _id:data[0]._id,
                username:data[0].username,
                payment:data[0].payment,
                status:data[0].status,
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
                        <h6 className="toptext  ">Edit Payment</h6>
                            <div className="flexbox">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor  rightspace">Username</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input bottomspace rightspace " name="username" onChange={this.handleClick} value={this.state.username} placeholder="username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flexbox topspace">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor rightspace">Payment</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input  bottomspace rightspace " name="payment" onChange={this.handleClick} value={this.state.payment}placeholder="payment" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="inputcolor leftspace">Status</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="input bottomspace leftspace " name="status" onChange={this.handleClick} value={this.state.status} placeholder="status" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    </div>
                                </div>
                            </div> 
                              
                            {this.state.showFunctionComponent && <div><Func/></div>}     
                            <button type="submit" className="buttons">Edit </button>
                        </form>
                </div>
            
        </>
    }
}

export default (ProfilePage);