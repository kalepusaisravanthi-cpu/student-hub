import React, { useState } from 'react';
import axios from "axios"
const App = () => {
  const [val,setVal]=useState([])
    
  const [Data, setData] = useState({
    name: '',
    dob: '',
    mobile: '',
    gender: '',
    department: '',
    email: '',
    qualification: '',
    experience: ''
  });
  const handler=(e)=>
    {
        const {name,value}=e.target
        setData((prevstate)=>
            ({
              ...prevstate,[name]:value
        }))
    }                                                                                                               
    const submithandler=(e)=>
    {
            e.preventDefault();
            const details={name:Data.name,dob:Data.dob, mobile:Data.mobile,gender:Data.gender,department:Data.department,email:Data.email,qualification:Data.qualification,experience:Data.experience}
          axios.post('http://localhost:7000/lecregister',details).then((err,res)=>
          {
            if(res!=='')
            {
                alert('Record Created successfully');
           // Nav('/dashboard')
                setVal(val+1);
            }
            else
            {
                console.log(err);
            }
          })
        
      
    }
  
  return (
    <div className="lf-container">
      <div>
      <h1 className="lf-form-title" style={{marginLeft:"-55px"}}>Add Lecturer</h1>
      <form onSubmit={submithandler} className="lf-form">
        <label className="lf-label">Name:</label>
        <input
          type="text"
          name="name"
          value={Data.name}
          onChange={handler}
          className="lf-input"
        />
        
        <label className="lf-label">Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={Data.dob}
          onChange={handler}
          className="lf-input"
        />

        <label className="lf-label">Mobile Number:</label>
        <input
          type="text"
          name="mobile"
          value={Data.mobile}
          onChange={handler}
          className="lf-input"
        />

        <label className="lf-label">Gender:</label>
        <select
          name="gender"
          value={Data.gender}
          onChange={handler}
          className="lf-input"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label className="lf-label">Department:</label>
        <input
          type="text"
          name="department"
          value={Data.department}
          onChange={handler}
          className="lf-input"
        />

        <label className="lf-label">Email:</label>
        <input
          type="email"
          name="email"
          value={Data.email}
          onChange={handler}
          className="lf-input"
        />

        <label className="lf-label">Qualification:</label>
        <input
          type="text"
          name="qualification"
          value={Data.qualification}
          onChange={handler}
          className="lf-input"
        />

        <label className="lf-label">Experience (in years):</label>
        <input
          type="number"
          name="experience"
          value={Data.experience}
          onChange={handler}
          className="lf-input"
        />

        <button type="submit" className="lf-submit-btn">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default App;
