import React, { useState } from 'react'
import OtpInput from './otp-Input'

const PhoneOtpForm = () => {
    const [phoneNumber , setPhoneNumber] = useState("")
    const[ showOtpInput , setShowOtpInput] = useState(false)
    const handlePhoneNumber = (e)=>{
        setPhoneNumber(e.target.value)
    }
    const hendlePhoneSubmit = (e)=>{
        e.preventDefault()

        // some validation
        const regx = /[^0-9]/g;
        if(phoneNumber.length < 10 || regx.test(phoneNumber)){
            alert("Enter a valid Phone Number")
            return
        }
        else{
            setShowOtpInput(true)
        }
        // Call API
        
    }
    const onOtpSubmit = (otp)=>{
        console.log(`Login Successfully with ${otp}`)
    }

  return (
    <div>
    {!showOtpInput ? 
        <form onSubmit={hendlePhoneSubmit} >
        <input type="text" 
        value={phoneNumber}
        onChange={handlePhoneNumber}
        placeholder='Enter Phone Number'
        
        />
        <button type='submit'>Submit</button>
    </form>
    
    : <div>
        <p>Enter Otp Sent to  { phoneNumber}</p>
        <OtpInput length={4} onSubmit={onOtpSubmit} />
    </div>
    
    }
    </div>
  )
}

export default PhoneOtpForm