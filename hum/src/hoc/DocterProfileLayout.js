import React from "react";
import adminLayout from "../hoc/docterLayout"
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
                <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                            <div className="profile-sidebar">
                                <div className="my-3 p-3 bg-body rounded shadow-sm">

                                {/* <!-- SIDEBAR USERPIC --> */}
                            <div className="profile-userpic">
                                <img src="https://via.placeholder.com/150" className="img-responsive profile-img-center" alt="" />
                            </div>
                            {/* <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE --> */}
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    Dr Kamran
                                </div>
                                <div className="profile-usertitle-job">
                                  Kamran@gmail.com
                                </div>
                                <div className="profile-usertitle-job">
                                  karachi
                                </div>
                                <div className="profile-usertitle-job">
                                  012037136
                                </div>
                            </div>
                            {/* <!-- END SIDEBAR USER TITLE -->
                            <!-- SIDEBAR BUTTONS --> */}
                              
                            <hr/>                
                            <div>
                                <div className="bd-example">
                                <div className="list-group">
                                    <NavLink to="/change-password" className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active': ''}`}>Change Password</NavLink>
                                </div>
                            </div>
                                </div>
                            </div>
                            
                            
                            </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile-content">
                                    <ChildComponent {...this.props} />
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        }
    }

    return adminLayout(UserProfilePageHoc);
}


export default userProfileLayout;