import React from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/staffLayout";
import axios from "axios";


class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            file:null,
            id:null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    click=(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('id', this.state.id);
        formData.append('file', this.state.file);
        axios.post("http://localhost:8003/upload", formData, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
       
            alert( res.statusText);
        
      })
        // fetch('http://localhost:8003/upload', {
        //   method: 'POST',
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: formData,
        //   }).then((e)=>{
        //     console.log("sucess")
        //   }).catch((e)=>{
        //     console.error("error")
        //   });
        //   console.log(this.state.file);
    }
    handleClick(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
    handleFileChange = (event) => {
        this.setState({file:event.target.files[0]
        ,loaded: 0});
      };

    render(){
        return <>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Report </h6>
                        <form onSubmit={this.click}  enctype="form-data">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Patient's Username</label>
                                    <div className="input-group mb-3">
                                    <input type="text" name="id" onChange={this.handleClick} className="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text"  id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                                    <div className="input-group mb-3">
                                        <input type="file" className="form-control" onChange={this.handleFileChange} placeholder="Docter" name="file" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                      
                                    </div>
                                </div>
                            <button type="submit" className="btn btn-default">Upload Report</button>
                        </form>
                </div>
            
        </>
    }
}

export default userProfileLayout(ProfilePage);