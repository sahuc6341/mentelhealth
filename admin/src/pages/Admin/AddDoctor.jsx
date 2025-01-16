import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets_admin/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'
const AddDoctor = () => {

  const [docImg,setDocImg]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [experience,setExperience]=useState('1Year')
  const [fees,setFees]=useState('')
  const [about,setAbout]=useState('')
  const [speciality,setSpeciality]=useState('General physician')
  const [degree,setDegree]=useState('')
  const [address1,setaddress1]=useState('')
  const [address2,setaddress2]=useState('')
  
  const {backendUrl,aToken}=useContext(AdminContext)

  const onSubmitHandler=async(event)=>{
    event.preventDefault()
     try{
      if(!docImg){
        return toast.error('Image Not Selected')
      }
       const formData=new FormData()
       formData.append('image',docImg)
       formData.append('name',name)
       formData.append('email',email)
       formData.append('password',password)
       formData.append('experience',experience)
       formData.append('fees',Number(fees))
       formData.append('about',about)
       formData.append('speciality',speciality)
       formData.append('degree',degree)
       formData.append('address',JSON.stringify({line1:address1,line2:address2}))

       formData.forEach((value,key)=>{
          console.log(`${key}:${value}`);
       })
       const {data} =await axios.post(backendUrl+'/api/admin/add-doctor',formData,{headers:{aToken}})
        if(data.success){
          toast.success(data.message)
          setDocImg(false)
          setName('')
          setPassword('')
          setEmail('')
          setaddress1('')
          setaddress2('')
          setDegree('')
          setAbout('')
          setFees('')
        }else{
          toast.error(data.message)
        }
     }catch(error){
       toast.error(error.message)
       console.log(error)
     }
  }
     
     
  
  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>
      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg):assets.upload_area} alt="" />
          </label> 
          <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id='doc-img' hidden/>
          <p>Upload doctor <br/>picture</p>
        </div>
        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
          <div className='flex-1 flex flex-col gap-1'>
            <p>Doctor Name</p>
            <input onChange={(e)=>setName(e.target.value)} value={name} className='border roundedpx-3 py-2' type="text" placeholder='Name' required/>
          </div>

          <div className='flex-1 flex flex-col gap-1'>
            <p>Doctor Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border roundedpx-3 py-2' type="email" placeholder='email' required/>
          </div>

          <div className='flex-1 flex flex-col gap-1'>
            <p>Doctor Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border roundedpx-3 py-2' type="password" placeholder='password' required/>
          </div>
          <div>
            </div>
            <div  className='flex-1 flex flex-col gap-1' >
            <p>Experience </p>
            <select onChange={(e)=>setExperience(e.target.value)} value={experience} className='border roundedpx-3 py-2' name="" id="">
              <option value="1 Year">1 year</option>
              <option value="2 Year">2 year</option>
              <option value="3 Year">3 year</option>
              <option value="4 Year">4 year</option>
              <option value="5 Year">5 year</option>
              <option value="6 Year">6 year</option>
              <option value="7 Year">7 year</option>
            </select>
            </div>
          </div>
          <div  className='flex-1 flex flex-col gap-1'>
            <p>Fees</p>
            <input onChange={(e)=>setFees(e.target.value)} value={fees} className='border roundedpx-3 py-2'type="number" placeholder='fees' required/>
          </div>

        </div>
        <div className='w-full lg:flex-1 flex flex-col gap-4'>
          <div  className='flex-1 flex flex-col gap-1'>
            <p>Speciality</p>
            <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className='border roundedpx-3 py-2' name="" id="">
              <option value="General physician">General physician</option>
              <option value="Gynecologist">Gyncologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div  className='flex-1 flex flex-col gap-1'>
            <p>Education</p>
            <input onChange={(e)=>setDegree(e.target.value)} value={degree}  className='border roundedpx-3 py-2' type="text" placeholder='Education' required/>
          </div>
          <div  className='flex-1 flex flex-col gap-1'>
            <p>Address</p>
            <input onChange={(e)=>setaddress1(e.target.value)} value={address1} className='border roundedpx-3 py-2' type="text" placeholder='Address 1' required/>
            <input onChange={(e)=>setaddress2(e.target.value)} value={address2} className='border roundedpx-3 py-2' type="text" placeholder='Address 2' required/>
          </div>
        </div>
        <div>
            <p className='mt-4 mb-2'>About Doctor</p>
            <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded ' type="text" placeholder='write about doctor' rows={5} required/>
          </div>

          <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add doctor</button>
      </div>
      
    </form>
  )
}

export default AddDoctor