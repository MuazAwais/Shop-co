'use client'
import { useState } from "react";
import { CiMail } from "react-icons/ci";    

const Register = () => {
    const [email, setEmail] = useState("")
    const handleSubmit = () => {
        const trimmedEmail = email.trim();
        if (trimmedEmail === "") {
            return;
        }
        localStorage.setItem("newsletterEmail", trimmedEmail);
        setEmail("");
    }
  return (
    <div className='bg-black rounded-2xl pt-[32px] pl-[24px] pr-[23px] md:px-[64px]  pb-[28px] md:py-[36px] gap-y-[32px] flex flex-col md:flex-row justify-between items-center'>
        <h2 className='font-inter font-black text-[32px] text-[#ffffff] leading-9 max-w-[297px] md:max-w-[470px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className='flex-col flex gap-[14px] max-w-[350px] w-full'>
            <div className='relative'>
                <input type="email" placeholder='Email your email address' value={email} onChange={(e)=>setEmail(e.target.value)} className='text-[#02020277] bg-[#ffffff] py-[12px] pl-[48px] rounded-full w-full focus:ring focus:ring-black'/>
                <div className='absolute bottom-3 left-4'>
                    <CiMail size={24}/>
                </div>
            </div>
            <button className="bg-white font-black rounded-full px-[44px] py-[12px] hover:bg-gray-200 active:bg-white" onClick={handleSubmit}>
                Subscribe to Newsletter
            </button>
        </div>
    </div>
  )
}

export default Register