import "./App.css"
import { person, mail, call, logoUsd, helpCircle } from 'ionicons/icons';
import { TypeAnimation } from 'react-type-animation';
import { useState} from 'react';
import axios from "axios"


function App() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [mobileNumber,setMobileNumber] = useState("")
  const [gig,setGig] = useState("")
  const [cost,setCost] = useState("")
  const [dataSent,setDataSent] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(name,email,mobileNumber,gig,cost)
    
    
    const response = await axios.post("https://huskyhiveserver.onrender.com/api/gigs",{Name:name,emailid:email,mobileno:mobileNumber,gig:gig,cost:cost})
    if(response.status==200){
      setDataSent(true)
    }
  }


  return (
    <div className="bg-dark background-dark">
      
      <h3 className="text-light sticky-top font" style={{ zIndex: 999 }}>
      <TypeAnimation 
      sequence={[
        'HuskyHive.',
        3000,
        ''
        
      ]}
      speed = {1}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      loop={true}  
      style={{  display: 'inline-block'}}
      className="text-light"
    />
      </h3>
      <div style={{backgroundColor:"black"}}>
      <div className="row justify-content-center text-light">
        {dataSent?<>
        <div className="container"><span className="container">data sent sucessfully, Refresh page to submit again</span></div>
        </>:<>
          <div className="col-md-6 mt-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <ion-icon icon={person} className="me-2"></ion-icon>
                 <span> Name</span>
              </label>
              <input type="text" className="form-control" id="name" name="name" value={name}  onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <ion-icon icon={mail} className="me-2"></ion-icon>
                <span> Email</span>
              </label>
              <input type="email" className="form-control" id="email" name="email"  value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                <ion-icon icon={call} className="me-2"></ion-icon>
                <span> Mobile Number</span>
              </label>
              <input type="tel" className="form-control" id="mobile" name="mobile"  value={mobileNumber} onChange={e=>setMobileNumber(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="gig" className="form-label">
              <ion-icon name="ticket-outline"></ion-icon>
                <span> What's your Gig</span>
              </label>
              <textarea className="form-control" id="gig" name="gig" rows="3"  value={gig} onChange={e=>setGig(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="cost" className="form-label">
                <ion-icon icon={logoUsd} className="me-2"></ion-icon>
                <span> Cost</span>
              </label>
              <input type="number" className="form-control" id="cost" name="cost"  value={cost} onChange={e=>setCost(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
        </>}
      </div>
    </div>
    </div>
  )
}

export default App
