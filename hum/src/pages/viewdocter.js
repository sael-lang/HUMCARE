import React from "react";
import adminLayout from "../hoc/patientLayout";
import "./admin.css"
class DocterDetails extends React.Component {
    

    render(){
        return (
            <>
            <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">Doctors Table</h5>
                    </div>
                   
                </div>
                <div className="adminsub"></div>
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>designation</th>
                                <th>office at</th>
                                <th>Timing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fawad Iqbal</td>
                                <td>190939@students.au.edu.pk</td>
                                <td>Psychologist </td>
                                <td>Room1 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Ali Raza</td>
                                <td>190941@students.au.edu.pk</td>
                                <td>Ophthalmologist </td>
                                <td>Room2 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Sameed Ijaz</td>
                                <td>190927@students.au.edu.pk</td>
                                <td>Dermatologist </td>
                                <td>Room3 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Umair Mohsin</td>
                                <td>190925@students.au.edu.pk</td>
                                <td>Psychologist</td>
                                <td>Room4 </td>
                                <th>10:30-4:30</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
          
                               </div>
            </>
          );
    }
}

export default adminLayout(DocterDetails);