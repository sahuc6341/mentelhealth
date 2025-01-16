import React, { useContext, useState } from 'react'

import { AppContext } from '../context/AppContext'
import {assets} from '../assets/assets_frontend/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Myprofile = () => {
  const{userData,setUserData,token,backendUrl,loadUserProfileData}=useContext(AppContext)
  const[isEdit,setIsEdit]=useState(false)
  const [image,setImage]=useState(false)

  const updateUserProfileData=async()=>{

    try{
      const formData=new FormData()
      formData.append('name',userData.name)
      formData.append('phone',userData.phone)
      formData.append('address',JSON.stringify(userData.address))
      formData.append('gender',userData.gender)
      formData.append('dob',userData.dob)

      image && formData.append("image",image)

      const {data}=await axios.post(backendUrl+'/api/user/update-profile',formData,{headers:{token}})

      if(data.success){
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      }else{
        toast.error(data.message)
      }
    }catch(error){
       console.log(error)
       toast.error(error.message)
    }

  }
 return userData &&(
  
    <div>

      {
        isEdit
        ?<label htmlFor="image">
             <div className='inline-block relative cursor-pointer'>
              <img className='w-36 rounded opacity-75' src={image?URL.createObjectURL(image):userData.image} alt="" />
              <img src={image?'':assets.upload_icon} alt="" />
             </div>
             <input onChange={(e)=>setImage(e.target.files[0])} type="file"  id="image" hidden/>
        </label>
        : <img src={userData.image} alt="" />
      }
        
          {
            isEdit
            ?<input type="text"  value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} />
            :<p>{userData.name}</p>
          }

          <hr />
          <div>
            <p>
              Contact Information
            </p>
            <div>
              <p>Email id:</p>
              <p>{userData.email}</p>
              <p>Phone:</p>
              {
                 isEdit
                 ?<input type="text"  value={userData.name} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))} />
                 :<p>{userData.phone}</p>
              }
              <p>Address:</p>
              {
                isEdit
                ?<p><input onChange={(e)=>setUserData(prev=>({...prev, address:{...prev.address,line1: e.target.value}}))}value={userData.address.line1} type="text" />
                <br />
                 <input onChange={(e)=>setUserData(prev=>({...prev, address:{...prev.address,line2: e.target.value}}))}value={userData.address.line2} type="text" />
                </p>
                :<p>
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              }
            </div>
          </div>
          <div>
            <p>Basic INFORMATION</p>
            <div>
              <p>Gender:</p>
              {
                 isEdit
                 ?<select onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
                  <option value="Male"></option>
                  <option value="Female"></option>
                 </select>
                 :<p>{userData.gender}</p>
              }
              <p>Birthday:</p>
              {
                isEdit
                ? <input type="data" onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))} value={userData.dob}/>
                :<p>{userData.dob}</p>
              }
            </div>
          </div>
          <div>
            {
              isEdit
              ?<button onClick={updateUserProfileData}>Save information</button>
              :<button onClick={()=>setIsEdit(true)}>Edit</button>
            }
          </div>
    </div> 
  )
}

export default Myprofile