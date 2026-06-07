import './stu1.css';
import axios from "axios"   
import React, {useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function Stuupdatelec() {
    const [data, setData] = useState({ 
      image:'',
        name: '',
        email: '',
        mobileNumber: '',
        dob: '',
        gender: '',
        aadhar: '',
        fatherName: '',
        motherName: '',
        guardianName: '',
        guardianMobile: '',
        fatherAadhar:'',
        motherAadhar:'',
        fatherMobileNumber:'',
        motherMobileNumber:'',
        caste:'',
        village:'',
        mandal:'',
        district:'',
        pincode:'',
        state:'',
        hallTicketNumber:'',
        sscMarks:'',
        sscPercentage:'',
        schoolName:'',
        schoolAddress:'',
        schoolPincode:'',
        collegeName:'',
        pinNumber:'',
        branch:'',
        polycetHallTicketNumber:'',
        polycetRank:'',
        joiningDate:'',
        collegeAddress:'',
        collegeDistrict:'',
        collegePincode:'',
        year:'',
        shift:''

     });
     const { aadhar } = useParams();
   
    const nav=useNavigate();
    React.useEffect(() => {
        axios.get(`http://localhost:8080/student/api/get/${aadhar}`)
        .then((res) => {
          if (res.data  && res.data.name) {  
          setData({ 
            image:res.data.image|| '',
            name: res.data.name || '',
            email: res.data.email || '',
            mobileNumber:res.data.mobileNumber  || '',
            dob:res.data.dob || '',
            gender:res.data.gender || '',
            aadhar:res.data.aadhar || '',
            fatherName:res.data.fatherName || '',
            motherName:res.data.motherName || '',
            guardianName:res.data.guardianName|| '',
            guardianMobile:res.data.guardianMobile || '',
            fatherAadhar:res.data.fatherAadhar || '',
            motherAadhar:res.data.motherAadhar || '',
            fatherMobileNumber:res.data.fatherMobileNumber || '',
            motherMobileNumber:res.data.motherMobileNumber || '',
            caste:res.data.caste || '',
            village:res.data.village || '',
            mandal:res.data.mandal || '',
            district:res.data.district || '',
            pincode:res.data.pincode || '',
            state:res.data.state || '',
            hallTicketNumber:res.data.hallTicketNumber || '',
            sscMarks:res.data.sscMarks || '',
            sscPercentage:res.data.sscPercentage || '',
            schoolName:res.data.schoolName || '',
            schoolAddress:res.data.schoolAddress || '',
            schoolPincode:res.data.schoolPincode || '',
            collegeName:res.data.collegeName || '',
            branch:res.data.branch || '',
            year:res.data.year || '',
            semester:res.data.semester || '',
            shift:res.data.shift || '',
            pinNumber:res.data.pinNumber || '',
            polycetHallTicketNumber:res.data.polycetHallTicketNumber || '',
            polycetRank:res.data.polycetRank || '',
            joiningDate:res.data.joiningDate || '',
            collegeAddress :res.data.collegeAddress || '',
            collegeDistrict:res.data.collegeDistrict || '',
            collegePincode:res.data.collegePincode || '',
          });
    }})
    
    .catch((err) => {
      console.error('Error fetching data:', err);
    });
},[aadhar]);

    const handler=(e)=>{
        const { name , value } = e.target;
 
        setData((prevstate) => ({ ...prevstate, [name]: value }));
    }

    const submithandler=(e)=>{
        e.preventDefault();
        const details = {
          image:data.image,
          name:data.name,
          email:data.email,
           mobileNumber:data.mobileNumber,
           dob: data.dob,
           gender:data.gender,
           aadhar:data.aadhar,
           fatherName:data.fatherName,
           motherName:data.motherName,
           guardianName:data.guardianName,
           guardianMobile:data.guardianMobile,
           fatherAadhar:data.fatherAadhar,
           motherAadhar:data.motherAadhar,
           fatherMobileNumber:data.fatherMobileNumber,
           motherMobileNumber:data.motherMobileNumber,
           caste:data.caste,
           village:data.village,
           mandal:data.mandal,
           district:data.district,
           pincode:data.pincode,
           state:data.state,
           hallTicketNumber:data.hallTicketNumber,
           sscMarks:data.sscMarks,
           sscPercentage:data.sscPercentage,
           schoolName:data.schoolName,
           schoolAddress:data.schoolAddress,
           schoolPincode:data.schoolPincode,
           collegeName:data.collegeName,
           branch:data.branch,
           year:data.year,
           semester:data.semester,
           shift:data.shift,
           pinNumber:data.pinNumber,
           polycetHallTicketNumber:data.polycetHallTicketNumber,
           polycetRank:data.polycetRank,
           joiningDate:data.joiningDate,
           collegeAddress:data.collegeAddress,
           collegeDistrict:data.collegeDistrict,
           collegePincode:data.collegePincode
     
          };

        axios.put(`http://localhost:8080/student/api/${aadhar}`, details)
        .then((res) => {
            if (res.status === 200) {
                Swal.fire({
                           title: "student Update successful!",
                           text: "Good job!",
                           icon: "success"
                         });
                
                  nav('/lecturemenu?tab=students');
                
            } else {
                console.log(res);
            }
        })
        .catch((err) => {
          console.error('Error submitting data:', err);
        });
    };
    

    
    
        return (
            <>
            <br/><div id="stu1" style={{ display: "flex", gap: "0px" ,marginLeft:"-60px",marginTop:"-90px"}}>
            <div> 
        <img class="im" src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="." />             
    </div>             
    <div className='form-container'>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <form method="post" onSubmit={submithandler} >                                   
            <fieldset class="form-fieldset">
                <center>                   
                    <legend class="form-legend"> STUDENT INFORMATION FORM</legend>
                </center>                   
                <br/> <center> <lable > <h3>Upload Image</h3>
                <input  value ={data.image} style={{marginLeft:"75px"}} name="file" onChange={handler} />
              </lable></center><br/>
              <div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-solid fa-circle-user"></i></label>                         
               &nbsp;<input name="name" value={data.name} placeholder="name" class="form-input"  onChange={handler} />                         
                &nbsp;&nbsp;&nbsp;&nbsp;    
                <label><i class="fa-regular fa-envelope"></i></label> &nbsp;                         
                <input  name="email"  value={data.email} placeholder=" email" class="form-input"  onChange={handler}/><br /><br /><br />                         
               </div> &nbsp;<div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa fa-phone-square" aria-hidden="true"></i></label> &nbsp;                         
                <input value={data.mobileNumber} name="mobileNumber" placeholder='mobileNumber no.' class="form-input" onChange={handler} />  
                &nbsp; &nbsp; &nbsp;                          
                <label class="label-dob"><i class="fa-regular fa-calendar"></i></label> &nbsp;                         
                <input type="date" value={data.dob} name="dob" class="form-input" placeholder='dob' onChange={handler}/><br /><br /><br />                         
                </div>&nbsp;<div style={{display:"flex"}}>&nbsp;&nbsp;<label class="label-gender"><i class="fa-solid fa-users-between-lines"></i></label>                         
                &nbsp;&nbsp;<select   value={data.gender} name="gender" class="form-input" onChange={handler}>
                    <option>select gender</option>                             
                    <option value={"male"}>male</option>                             
                    <option value={"female"}>female</option>                             
                    <option value={"others"}>others</option>
                </select> &nbsp; &nbsp; &nbsp;                      
                 <label><i class="fa fa-list-ol" aria-hidden="true"></i></label> &nbsp;                         
                <input  value={data.aadhar} name="aadhar" placeholder='aadhar no.' class="form-input" onChange={handler}/><br /><br /><br />                         
                 </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-regular fa-user"></i></label>  &nbsp;                           
                <input  value={data.fatherName} name="fatherName" class="form-input" placeholder='fatherName' onChange={handler}/>                         
                &nbsp;&nbsp;  &nbsp; &nbsp; 
                <label><i class="fa-solid fa-user"></i></label>                         
              &nbsp;                         
                <input  value={data.motherName} name="motherName" placeholder=' motherName' class="form-input" onChange={handler}/><br /><br /><br />                         
                </div>&nbsp;<div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-solid fa-circle-user"></i></label>   &nbsp;                          
                <input  value={data.guardianName} name="guardianName" class="form-input" placeholder='guardianName' onChange={handler}/>                         
                &nbsp;  &nbsp;  &nbsp;
                <label><i class="fa fa-phone-square" aria-hidden="true"></i></label>                         
                &nbsp;                         
                <input  value={data.guardianMobile} name="guardianMobile" placeholder=' guardian mobileNumber ' class="form-input" onChange={handler}/><br /><br /><br />                                                 
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
          <input className="inp"  value={data.fatherAadhar} name="fatherAadhar" placeholder="father aadhar no." onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; 
          <label className="mobileNumber-label"><i class="fa fa-list-ol" aria-hidden="true"></i></label> &nbsp;&nbsp;
          <input className="inp"  value={data.motherAadhar} name="motherAadhar" placeholder="mother aadhar no." onChange={handler} /><br /><br />
         </div><br/> <br /><div style={{display:"flex"}}>
         &nbsp; &nbsp; &nbsp; 
          <label className="phone-label"><i className="fa-solid fa-phone-volume"></i></label> &nbsp;
          <input className="inp"  value={data.fatherMobileNumber} name="fatherMobileNumber" placeholder="father mobileNumber no." onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <label className="phone-label"><i className="fa-solid fa-phone"></i></label> &nbsp;&nbsp;
          <input className="inp" value={data.motherMobileNumber} name="motherMobileNumber" placeholder="mother mobileNumber no." onChange={handler} /><br /><br /><br />
          </div><br/>
          <div style={{display:"flex"}}>&nbsp; &nbsp;&nbsp; 
          <label><i className="fa-regular fa-file"></i></label>
          &nbsp;
          <select className="inp"  value={data.caste} name="caste" onChange={handler}>
            <option>select category</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OTHERS">OTHERS</option>
          </select>
          &nbsp; &nbsp; &nbsp;&nbsp; 
          <label><i className="fa-solid fa-place-of-worship"></i></label> &nbsp;
          <input className="inp"  value={data.village} name="village" placeholder="village"  onChange={handler} /><br /><br /><br />
         </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp; <label><i className="fa-regular fa-map"></i></label>
          <input className="inp"  value={data.mandal} name="mandal" placeholder="mandal name" onChange={handler} /> &nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp;&nbsp;<label className="location-label"><i className="fa-solid fa-location-dot"></i></label> &nbsp;&nbsp;
          <select  value={data.district} className="inp" name="district" onChange={handler}>
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
          <input  value={data.pincode} name="pincode" className="inp" placeholder="pincode" onChange={handler} />
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <label className="clone-label"><i className="fa-solid fa-clone"></i></label>
          <select  value={data.state} name="state" className="inp" onChange={handler}>
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
          <input className="inp"  value={data.hallTicketNumber} name="hallTicketNumber" placeholder="ssc hall hallTicketNumber." onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; <label className="icon-label"><i className="fa-solid fa-signal"></i></label> &nbsp;&nbsp;
          <input className="inp"  value={data.sscMarks} name="sscMarks" placeholder="ssc sscMarks" onChange={handler} /><br /><br />
         </div> <br /><br/><div style={{display:"flex"}}>&nbsp; &nbsp;&nbsp; &nbsp;
          <label className="icon-label"><i className="fa-solid fa-percent"></i></label> &nbsp;
          <input className="inp"  value={data.sscPercentage} name="sscPercentage" placeholder="percentage of ssc" onChange={handler} />
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<label className="icon-label"><i className="fa-solid fa-place-of-worship"></i></label>
          <input className="inp"  value={data.schoolName} name="schoolName" placeholder="school name" onChange={handler} /><br /><br /><br />
    </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp; &nbsp;
          <label className="icon-label"><i className="fa-solid fa-chart-area"></i></label>
          &nbsp;&nbsp;<input className="inp"  value={data.schoolAddress} name="schoolAddress" placeholder="school address"  onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; <label className="icon-label"><i className="fa-solid fa-droplet"></i></label> &nbsp;
          <input className="inp"  value={data.schoolPincode} name="schoolPincode" placeholder="pincode"  onChange={handler} /><br /><br /><br />
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
          <input className="inp"  value={data.collegeName} name="collegeName" placeholder="college name" onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp;<label className="icon-label"><i className="fa-solid fa-layer-group"></i></label> &nbsp;
          <select className="inp"  value={data.branch} name="branch" onChange={handler}>
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
          <input className="inp"  value={data.year} name="year" placeholder="year" onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          &nbsp;  <label className="icon-label"><i className="fa-solid fa-layer-group"></i></label> &nbsp;
          <select className="inp"  name="semester" onChange={handler}>
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
          <select className="inp"  value={data.shift} name="shift" onChange={handler}>
            <option>shift</option>
            <option value="1">Shift 1</option>
            <option value="2">Shift 2</option>
          </select>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <label className="icon-label"><i className="fa-regular fa-calendar-minus"></i></label> &nbsp;
          <input className="inp"  value={data.pinNumber} name="pinNumber" placeholder="pincode no" onChange={handler} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <br />
          <br /><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="icon-label"><i className="fa-solid fa-file"></i></label> &nbsp;
          <input className="inp"  value={data.polycetHallTicketNumber} name="polycetHallTicketNumber" placeholder="polycet hall hallTicketNumber" onChange={handler} />
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<label className="icon-label"><i className="fa-regular fa-calendar-days"></i></label>
          &nbsp;<input className="inp" value={data.polycetRank} name="polycetRank" placeholder="polycet polycetRank" onChange={handler} /><br /><br /><br />
    </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="icon-label"><i className="fa-regular fa-calendar"></i></label> &nbsp;
          <input className="inp"  value={data.joiningDate} name="joiningDate" placeholder="dob of join"  onChange={handler} />
          &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <label className="icon-label"><i className="fa-regular fa-envelope"></i></label> &nbsp;
          <input className="inp"  value={data.collegeAddress} name="collegeAddress" placeholder="address of college"  onChange={handler} /><br /><br /><br />
          </div><br/><div style={{display:"flex"}}>&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="icon-label"><i className="fa-solid fa-location-crosshairs"></i></label> &nbsp;
          <select className="inp"  value={data.collegeDistrict} name="collegeDistrict" onChange={handler}>
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
          <input className="inp"  value={data.collegePincode} name="collegePincode" placeholder="pincode" onChange={handler} />
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
