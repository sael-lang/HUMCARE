import React from "react";
import adminLayout from "../hoc/adminLayout"
import "./../assets/css/profile.css"
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
                <div className="container">
                <div className="row profile">
                            <div className="profile-sidebar">
                                
                            </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile-content">
                                    <ChildComponent {...this.props} />
                                </div>
                            </div>
                        </div>
                    
            </>
        }
    }

    return adminLayout(UserProfilePageHoc);
}


export default userProfileLayout;