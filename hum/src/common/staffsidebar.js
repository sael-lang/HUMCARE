import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';
import "./style.css"
import img9 from "./logo4.png"
import { connect } from "react-redux";
class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            
            <PerfectScrollbar className="sidebar-items">
            <img style={{
    height: '22vh',
    width: '12vw',
  border: '2px solid white',
  borderRadius: '100%',
  margin:'0 0  6px 0px'
}}

 src={img9} alt="hash" />
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                
                        <Link tag="a" className="" to="/staffdashboard">
                            <i className="adminlogo fa fa-dashboard"></i> Dashboard
                        </Link>
                    </li>
                  
                    
                 
                    
                   
                </ul>
            </PerfectScrollbar>
            <div className="dropdown fixed-bottom-dropdown">
                <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://via.placeholder.com/50" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <span>{this.props.username}</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    {/* <li><Link className="dropdown-item" to="/staffprofile"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li> */}
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link></li>
                </ul>
            </div>
        </div>
    }
}
const mapStateToProps = (state) => ({
    username:state.username
  });
export default connect(mapStateToProps)(Sidebar);