
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './sturegistration.css'
//import LectureDetails from './LectureDetails'
export default function Lecget() {
    
const Delete=(id)=>{
    axios.delete(`http://localhost:8080/lecturers/${id}`).then((res)=>{
        alert('record deleted successfully');

    })
}
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/lecturers/get")
            .then((res) => {
                if (res !== ' ') {
                    setData(res.data);
                }
                else {
                    console.log("data error");
                }
            })
    }, [data]);  

  
 
    return (
        <><div style={{height:"100px",width:"1200px",backgroundColor:"white",marginLeft:"0px",marginTop:"10px"}}>
          <div style={{display:"flex" ,gap:"10px",marginLeft:"50px"}}><div style={{  color: '#4c7766', fontWeight: 'bold', padding: '30px', fontFamily:"Imprint MT Shadow" ,fontSize:"40px" }}>LECTURER DETAILS </div> 
         
         </div>
<hr/>

<br/> 
<center id="scrl" style={{ height: "fit-content", width: "1200px", overflow: "scroll", color: "#0b5e57", marginLeft: "10px" }}>
        
            <table  id="ro" borderColor="#4c7766" cellPadding="5px" cellSpacing="2px">
                <tr >
                <th>id</th>
                    <th>Lecture name</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Experience</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Nationality</th>
                    <th>Email</th>
                    <th>Qualification</th> 
                    <th colSpan={3}>UPDATE</th>
                      </tr>

                {
                    data.map(item => (

                        <tr>
                             <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th>{item.phoneNumber}</th>
                    <th>{item.address}</th>
                    <th>{item.department}</th>
                    <th>{item.experience}</th>
                    <th>{item.dob}</th>
                    <th>{item.gender}</th>
                    <th>{item.email}</th>
                    <th>{item.nationality}</th>
                    <th>{item.educationalQualification}</th>
                  
                   
                    <td><button style={{backgroundColor:"#adacac"}}><Link to={`/Lecupdate/${item.email}`} >edit</Link></button></td>
                  <td>  <button style={{backgroundColor:"#adacac"}} onClick={()=>Delete(item.id)}>delete</button></td>

                        </tr>))
                }


            </table>
            </center></div>
<br/><br/><br/>
        </>
    )
};