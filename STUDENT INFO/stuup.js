
//import { Link } from "react-router-dom";
//import Menu from  './stumenu';
import './stu1.css';
import axios from "axios"   
import React, {useState} from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function Stuupdate() {
    const [data, setData] = useState({ stuname: '',
        email: '',
        mobile: '',
        date: '',
        gender: '',
        stuaadhar: '',
        father: '',
        mother: '',
        guardian: '',
        guardianmobile: ''
     });
    const useparam = useParams();
    const { id } = useparam;
    const nav=useNavigate();
    React.useEffect(() => {
        axios.get(`http://localhost:7000/student/api/get/${id}`).then((res) => {
            setData({ stuname: res.data[0].stuname,email: res.data[0].email, mobile:res.data[0].mobile,date:res.data[0].date ,gender:res.data[0].gender,stuaadhar:res.data[0].stuaadhar,father:res.data[0].father,mother:res.data[0].mother,guardian:res.data[0].guardian,guardianmobile:res.data[0].guardianmobile,faaadhar:res.data[0].faaadhar,maaadhar:res.data[0].maaadhar,famobile:res.data[0].famobile,mamobile:res.data[0].mamobile,categery:res.data[0].categery,village:res.data[0].village,mandal:res.data[0].mandal,district:res.data[0].district,pin:res.data[0].pin,state:res.data[0].state,ticket:res.data[0].ticket,marks:res.data[0].marks,cgpa:res.data[0].cgpa,scname:res.data[0].scname,scaddress:res.data[0].scaddress,scpin:res.data[0].scpin,coname:res.data[0].coname,branch:res.data[0].branch,year:res.data[0].year,semester:res.data[0].semester,shift:res.data[0].shift,pinno:res.data[0].pinno,poly_tic:res.data[0].poly_tic,rank:res.data[0].rank,date_of_join:res.data[0].date_of_join,coaddressres : data[0].ata.coaddress,codistrict:res.data[0].codistrict,copin:res.copin[0]})
        })
    }//,[id]
);

    const handler=(e)=>{
        const { name, value } = e.target;
 
        setData((prevstate) => ({ ...prevstate, [name]: value }));
    }

    const submithandler=(e)=>{
        e.preventDefault();
        const details = {stuname:data.stuname,email:data.email, mobile:data.mobile,date:data.date ,gender:data.gender,stuaadhar:data.stuaadhar,father:data.father,mother:data.mother,guardian:data.guardian,guardianmobile:data.guardianmobile,faaadhar:data.faaadhar,maaadhar:data.maaadhar,famobile:data.famobile,mamobile:data.mamobile,categery:data.categery,village:data.village,mandal:data.mandal,district:data.district,pin:data.pin,state:data.state,ticket:data.ticket,marks:data.marks,cgpa:data.cgpa,scname:data.scname,scaddress:data.scaddress,scpin:data.scpin,coname:data.coname,branch:data.branch,year:data.year,semester:data.semester,shift:data.shift,pinno:data.pinno,poly_tic:data.poly_tic,rank:data.rank,date_of_join:data.date_of_join,coaddress:data.coaddress,codistrict:data.codistrict,copin:data.copin
        //data destructuring
             }

        axios.post(`http://localhost:8080/student/api/${id}`, details).then((res, err) => {
            if (res !== '') {
                alert('updated successful')
                nav('/getsalary');
            } else {
                console.log(err);
            }
        })
    }
    

    
    
        return (
            <>
            <br/><div id="stu1" style={{ display: "flex", gap: "0px" ,marginLeft:"-60px",marginTop:"-90px"}}>
            <div> 
        <img class="student-image" src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="." />             
    </div>             
    <div className='form-container'>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <form onSubmit={submithandler} >                                   
            <fieldset class="form-fieldset">
                <center>                   
                    <legend class="form-legend"> STUDENT INFORMATION FORM</legend>
                </center>                   
                <br/> <center> <lable > <h3>Upload Image</h3>
                <input style={{marginLeft:"75px"}} type="file" name="file" onChange={handler} />
              </lable></center><br/>
              <div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-solid fa-circle-user"></i></label>                         
               &nbsp;<input type="text" name="name" value={data.name} placeholder="name" class="form-input" required onChange={handler} />                         
                &nbsp;&nbsp;&nbsp;&nbsp;    
                <label><i class="fa-regular fa-envelope"></i></label> &nbsp;                         
                <input type="email" name="email"  value={data.email} placeholder=" email" class="form-input" required onChange={handler}/><br /><br /><br />                         
               </div> &nbsp;<div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa fa-phone-square" aria-hidden="true"></i></label> &nbsp;                         
                <input type='number' name="mobileNumber" placeholder='mobileNumber no.' class="form-input" onChange={handler} />  
                &nbsp; &nbsp; &nbsp;                          
                <label class="label-dob"><i class="fa-regular fa-calendar"></i></label> &nbsp;                         
                <input type='date' name="dob" class="form-input" placeholder='dob' onChange={handler}/><br /><br /><br />                         
                </div>&nbsp;<div style={{display:"flex"}}>&nbsp;&nbsp;<label class="label-gender"><i class="fa-solid fa-users-between-lines"></i></label>                         
                &nbsp;&nbsp;<select name="gender" class="form-input" onChange={handler}>
                    <option>select gender</option>                             
                    <option value={"male"}>male</option>                             
                    <option value={"female"}>female</option>                             
                    <option value={"others"}>others</option>
                </select> &nbsp; &nbsp; &nbsp;                      
                 <label><i class="fa fa-list-ol" aria-hidden="true"></i></label> &nbsp;                         
                <input type='number' name="aadhar" placeholder='aadhar no.' class="form-input" onChange={handler}/><br /><br /><br />                         
                 </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-regular fa-user"></i></label>  &nbsp;                           
                <input type='text' name="fatherName" class="form-input" placeholder='fatherName' onChange={handler}/>                         
                &nbsp;&nbsp;  &nbsp; &nbsp; 
                <label><i class="fa-solid fa-user"></i></label>                         
              &nbsp;                         
                <input type='text' name="motherName" placeholder=' motherName' class="form-input" onChange={handler}/><br /><br /><br />                         
                </div>&nbsp;<div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-solid fa-circle-user"></i></label>   &nbsp;                          
                <input type='text' name="guardianName" class="form-input" placeholder='guardianName' onChange={handler}/>                         
                &nbsp;  &nbsp;  &nbsp;
                <label><i class="fa fa-phone-square" aria-hidden="true"></i></label>                         
                &nbsp;                         
                <input type='number' name="guardianMobile" placeholder=' guardian mobileNumber ' class="form-input" onChange={handler}/><br /><br /><br />                                                 
               </div> 
        
        <br/>
                <button class="next-button">
                    <a class="next-button-link" href="#stu2">NEXT</a> 
                </button>
                  
            </fieldset>                 
        </form>             
    </div>
    
            </div>
    
    
    
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div  id="stu2" className="maindiv" style={{ display: "flex", gap: "0px" ,marginLeft:"-60px",marginTop:"-90px"}} >
            <div >
      <img className="im" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="." />
    </div>
                
    <div className='form-container2'>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <form  onSubmit={submithandler} >                                   
            <fieldset class="form-fieldset2">
                 <center>
            <br /><br />
            <legend><div className="hedng">PERSONAL DETAILS</div></legend>
          </center>
          <br /><br />
          <br />
          <div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;
          <label className="mobileNumber-label"><i class="fa fa-list-ol" aria-hidden="true"></i></label> &nbsp;
          <input className="inp" type="number" name="fatherAadhar" placeholder="father aadhar no." onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; 
          <label className="mobileNumber-label"><i class="fa fa-list-ol" aria-hidden="true"></i></label> &nbsp;&nbsp;
          <input className="inp" type="number" name="matherAadhar" placeholder="mother aadhar no." onChange={handler} /><br /><br />
         </div><br/> <br /><div style={{display:"flex"}}>
         &nbsp; &nbsp; &nbsp; 
          <label className="phone-label"><i className="fa-solid fa-phone-volume"></i></label> &nbsp;
          <input className="inp" type="number" name="fatherMobileNumber" placeholder="father mobileNumber no." onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <label className="phone-label"><i className="fa-solid fa-phone"></i></label> &nbsp;&nbsp;
          <input className="inp" type="number" name="motherMobileNumber" placeholder="mother mobileNumber no." onChange={handler} /><br /><br /><br />
          </div><br/>
          <div style={{display:"flex"}}>&nbsp; &nbsp;&nbsp; 
          <label><i className="fa-regular fa-file"></i></label>
          &nbsp;
          <select className="inp" name="caste" onChange={handler}>
            <option>select category</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OTHERS">OTHERS</option>
          </select>
          &nbsp; &nbsp; &nbsp;&nbsp; 
          <label><i className="fa-solid fa-place-of-worship"></i></label> &nbsp;
          <input className="inp" type="text" name="village" placeholder="village" required onChange={handler} /><br /><br /><br />
         </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp; <label><i className="fa-regular fa-map"></i></label>
          <input className="inp" type="text" name="mandal" placeholder="mandal name" onChange={handler} /> &nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp;&nbsp;<label className="location-label"><i className="fa-solid fa-location-dot"></i></label> &nbsp;&nbsp;
          <select className="inp" name="district" onChange={handler}>
             &nbsp;<option>district name</option>
            <option value="srikakulam">SRIKAKULAM</option>
            <option value="viziagnaram">VIZIANAGARAM</option>
            <option value="vizag">VIZAG</option>
            <option value="east godavari">EAST GODAVARI</option>
            <option value="west godavari">WEST GODAVARI</option>
            <option value="krishna">KRISHNA</option>
            <option value="guntur">GUNTUR</option>
            <option value="ongole">ONGOLE</option>
            <option value="prakasam">PRAKASAM</option>
            <option value="nellore">NELLORE</option>
            <option value="kadapa">KADAPA</option>
            <option value="chittoor">CHITTOOR</option>
            <option value="anantapur">ANANTAPUR</option>
            <option value="kurnool">KURNOOL</option>
          </select></div>
          &nbsp;&nbsp;&nbsp;&nbsp;<br/> &nbsp;
          
          <div style={{display:"flex"}}> &nbsp; &nbsp;&nbsp;  <label className="location-pincode-label"><i class="fa fa-map-pin" aria-hidden="true"></i></label> &nbsp;
          <input type="text" name="pincode" className="inp" placeholder="pincode" onChange={handler} />
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <label className="clone-label"><i className="fa-solid fa-clone"></i></label>
          <select name="state" className="inp" onChange={handler}>
            <option>state name</option>
            <option value="andhra pradesh">ANDHRA PRADESH</option>
            <option value="telangana">TELENGANA</option>
            <option value="tamilnadu">TAMILNADU</option>
            <option value="kerala">KERALA</option>
          </select></div>
          
    <br/><br/><br/><br /><br />
          <div style={{ display: "flex" }}>
            <button id="bu">
              <a style={{ color: "white", textDecoration: "none" }} href="#stu1">BACK</a>
            </button>
            <button className='next-btn'>
              <a style={{ color: "white", textDecoration: "none" }} href="#stu3">NEXT</a>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
    
            </div>
    
    <br/><br/><br/><br/>
    
    
    
    <div id="stu3" style={{ display: "flex", gap: "0px", marginLeft: "-60px"}}>
    <div>
      <img className="im" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="." />
    </div>
                
    <div className='form-container2'>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <form  onSubmit={submithandler} >                                   
            <fieldset class="form-fieldset2">
                <center>
            <br /><br />
            <legend><div className="hedng">SCHOOL DETAILS</div></legend>
          </center>
          <br /><br />
          <br /><div style={{display:"flex"}}>&nbsp; &nbsp;&nbsp; &nbsp;
          <label className="icon-label"><i className="fa-solid fa-pen-to-square"></i></label> &nbsp;
          <input className="inp" type="number" name="hallTicketNumber" placeholder="ssc hall hallTicketNumber." onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; <label className="icon-label"><i className="fa-solid fa-signal"></i></label> &nbsp;&nbsp;
          <input className="inp" type="number" name="sscMarks" placeholder="ssc sscMarks" onChange={handler} /><br /><br />
         </div> <br /><br/><div style={{display:"flex"}}>&nbsp; &nbsp;&nbsp; &nbsp;
          <label className="icon-label"><i className="fa-solid fa-percent"></i></label> &nbsp;
          <input className="inp" type="number" name="sscPercentage" placeholder="percentage of ssc" onChange={handler} />
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<label className="icon-label"><i className="fa-solid fa-place-of-worship"></i></label>
          <input className="inp" type="text" name="schoolName" placeholder="school name" onChange={handler} /><br /><br /><br />
    </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp; &nbsp;
          <label className="icon-label"><i className="fa-solid fa-chart-area"></i></label>
          &nbsp;&nbsp;<input className="inp" type="text" name="schoolAddress" placeholder="school address" required onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; <label className="icon-label"><i className="fa-solid fa-droplet"></i></label> &nbsp;
          <input className="inp" type="number" name="scpin" placeholder="pincode" required onChange={handler} /><br /><br /><br />
         </div> <br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="buttons">
            <button className="back-btn">
              <a href="#stu2">BACK</a>
            </button>
            <button className="next-btn">
              <a href="#stu4">NEXT</a>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
    
            </div>
     
     <br/><br/><br/>
    
     <div id="stu4" style={{ display: "flex", gap: "0px", marginLeft: "-60px"}}>
     <div>
      <img className="im" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="." />
    </div>
                
    <div className='form-container2'>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <form   onSubmit={submithandler} >                                   
            <fieldset class="form-fieldset2">
                <center>
           <br/><br/>
            <legend><div className="hedng">COLLEGE DETAILS</div></legend>
          </center><br/>
          <br /><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="icon-label"><i className="fa-solid fa-house"></i></label> &nbsp;
          <input className="inp" type="text" name="collegeName" placeholder="college name" onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp;<label className="icon-label"><i className="fa-solid fa-layer-group"></i></label> &nbsp;
          <select className="inp" name="branch" onChange={handler}>
            <option>branch</option>
            <option value="CME">Computers</option>
            <option value="ECE">Electronics & communication</option>
            <option value="EEE">Electrical & Electronics</option>
            <option value="ME">Mechanical</option>
            <option value="AA">Architecture</option>
            <option value="AE">Automobile</option>
            <option value="CE">Civil</option>
          </select></div><br />
          <br /><div style={{display:"flex"}}>&nbsp;&nbsp; &nbsp;&nbsp;
          <label className="icon-label"><i className="fa-regular fa-calendar-minus"></i></label> &nbsp;
          <input className="inp" type="date" name="year" placeholder="year" onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          &nbsp;  <label className="icon-label"><i className="fa-solid fa-layer-group"></i></label> &nbsp;
          <select className="inp" name="semester" onChange={handler}>
            <option>semester</option>
            <option value="sem1">Sem 1</option>
            <option value="sem2">Sem 2</option>
            <option value="sem3">Sem 3</option>
            <option value="sem4">Sem 4</option>
            <option value="sem5">Sem 5</option>
            <option value="sem6">Sem 6</option>
          </select></div><br />
          <br /><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp; &nbsp;
          <label className="icon-label"><i className="fa-solid fa-layer-group"></i></label>&nbsp;
          <select className="inp" name="shift" onChange={handler}>
            <option>shift</option>
            <option value="shift1">Shift 1</option>
            <option value="shift2">Shift 2</option>
          </select>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <label className="icon-label"><i className="fa-regular fa-calendar-minus"></i></label> &nbsp;
          <input className="inp" type="number" name="pinNumber" placeholder="pincode no" onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br /><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="icon-label"><i className="fa-solid fa-file"></i></label> &nbsp;
          <input className="inp" type="number" name="polycetHallTicketNumber" placeholder="polycet hall hallTicketNumber" onChange={handler} />
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<label className="icon-label"><i className="fa-regular fa-calendar-days"></i></label>
          &nbsp;<input className="inp" type="number" name="polycetRank" placeholder="polycet polycetRank" onChange={handler} /><br /><br /><br />
    </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="icon-label"><i className="fa-regular fa-calendar"></i></label> &nbsp;
          <input className="inp" type="dob" name="joiningDate" placeholder="dob of join" required onChange={handler} />
          &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <label className="icon-label"><i className="fa-regular fa-envelope"></i></label> &nbsp;
          <input className="inp" type="text" name="collegeAddress" placeholder="address of college" required onChange={handler} /><br /><br /><br />
          </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="icon-label"><i className="fa-solid fa-location-crosshairs"></i></label> &nbsp;
          <select className="inp" name="collegeDistrict" onChange={handler}>
            <option>district name</option>
            <option value="srikakulam">SRIKAKULAM</option>
            <option value="viziagnaram">VIZIANAGARAM</option>
            <option value="vizag">VIZAG</option>
            <option value="east godavari">EAST GODAVARI</option>
            <option value="west godavari">WEST GODAVARI</option>
            <option value="krishna">KRISHNA</option>
            <option value="guntur">GUNTUR</option>
            <option value="ongole">ONGOLE</option>
            <option value="prakasam">PRAKASAM</option>
            <option value="nellore">NELLORE</option>
            <option value="kadapa">KADAPA</option>
            <option value="chittoor">CHITTOOR</option>
            <option value="anantapur">ANANTAPUR</option>
            <option value="kurnool">KURNOOL</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp; <label className="icon-label"><i className="fa-solid fa-location-dot"></i></label> &nbsp;
          <input className="inp" type="number" name="collegePincode" placeholder="pincode" onChange={handler} />
          &nbsp;&nbsp;&nbsp;</div>
          
          <div className="buttons">
            <button className="back-btn"><a href="#stu3">BACK</a></button>
            <button className="submit-btn">SUBMIT</button>
          </div>
        </fieldset>
      </form>
    </div>
    
            </div>
    
            </>
        );
    }
    
    
    
    