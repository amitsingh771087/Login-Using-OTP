import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length=4 , onOtpSubmit= ()=>{}}) => {
    const [otp , setOtp] = useState(new Array(length).fill(""));

    const inputref = useRef([]);

    useEffect(()=>{
        if(inputref.current[0]){
            inputref.current[0].focus();
        }
    },[])
    console.log(inputref)

    const handleChanged = (index , e)=>{
        const val = e.target.value
        if(isNaN(val)) return;
        const newotp = [...otp];
        newotp[index] = val.substring(val.length - 1);
        setOtp(newotp);

        const combinedotp = newotp.join("");
        if(combinedotp.length === length) onOtpSubmit(combinedotp)

        // go forword 

        if(val && index < length -1 && inputref.current[index+1] ){
            inputref.current[index+1].focus()
        }
        
        

        

    }
    const handleClick = (index)=>{
        inputref.current[index].setSelectionRange(1,1)

    }
    const handleKeyDown = (index , e)=>{

        if(e.key === 'BackSpace' && !otp[index] && index > 0 && inputref.current[index-1]){
            inputref.current[index-1].focus();

        }
    }
  return (
    <>
        {
            otp.map((value, index)=>{
                return (
                    <input type='text'
                    key={index}
                    ref = {(input)=>(inputref.current[index]= input)}
                    value={value}
                    className='otpInput'
                    onChange={(e)=>{handleChanged(index,e)}}
                    onClick={()=>{handleClick(index )}}
                    onKeyDown={(e)=>{handleKeyDown(index , e)}}
                    />
                )
            })
        }
    </>
  )
}

export default OtpInput