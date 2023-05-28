import React from "react";
import adminLayout from "../hoc/adminLayout"
import "./../assets/css/profile.css"
import { NavLink } from "react-router-dom";
import "../pages/admin.css"

const userProfileLayout = (ChildComponent) => {
    class UserProfilePageHoc extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {}
        }
    
        render(){
            return <>
                <div className="admin"></div>
                            <div className="col-md-9">
                                <div className="profile-content">
                                    <ChildComponent {...this.props} />
                                </div>
                            </div>
                        
            </>
        }
    }

    return adminLayout(UserProfilePageHoc);
}


export default userProfileLayout;