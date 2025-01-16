import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'
const MyAppointments = () => {
  const{ backendUrl,token,getDoctorData }= useContext(AppContext)
  const [appointments,setAppointments]=useState([])
  const months =[" ","Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
  
  const slotDateFormat=(slotDate)=>{
    //const dateArray=slotDate.split('_')
    //return dateArray[0]+" "+months[Number(dateArray[1])]+" "+dateArray[2]
  }
  const navigate = useNavigate()
  const getUserAppointments=async()=>{
    try{
                const {data}=await axios.get(backendUrl+'/api/user/appointments',{headers:{token}})
                if(data.success){
                  setAppointments(data.appointments.reverse())
                  console.log(data.appointments)
                }

    }catch(error){
                console.log(error)
                toast.error(error.message)
    }
  }

  const cancelAppointment=async(appointmentId)=>{
    try{
          const{data}=await axios.post(backendUrl+'/api/user/cancel-appointment',{appointmentId},{headers:{token}})
          if(data.success){
            toast.success(data.message)
            getUserAppointments()
            getDoctorData()
          }else{
            toast.error(data.message)
          }
    }catch(error){
      console.log(error)
      toast.error(error.message)
    }
  }
   const initPay =(order)=>{
          const  options={
            key:import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount:order.amount,
            currency:order.currency,
            name:'Appointment Payment',
            description:'Appointment Payment',
            order_id:order.id,
            receipt:order.receipt,
            handler:async(response)=>{
              console.log(response)

              try{
                     const{data}=await axios.post(backendUrl+'/api/user/verifyRazorpay',response,{headers:{token}})
                     if(data.success){
                      getUserAppointments()
                      navigate('/my-appointments')

                     }
              }catch(error){
                        console.log(error)
                        toast.error(error.message)
              }
            } 
          }
          const rzp=new window.Razorpay(options)
          rzp.open()
   }
  const appointmentRazorpay=async(appointmentId)=>{
            try{
                  const{data}=await axios.post(backendUrl+'/api/user/payment-razorpay',{appointmentId},{headers:{token}})
                  if(data.success){
                    initPay(data.order)
                  }
            }catch(error){

            }
  }
  useEffect(()=>{
    if(token){
      getUserAppointments()
    }
  },[token])
  return (
    <div>
        <p>My appointment</p>
        <div>
          {appointments.map((item,index)=>(
            <div key={index}>
              <div>
                <img src={item.docData.image} alt="" />
              </div>
              <div>
                <p>{item.docData.name}</p>
                <p>{item.docData.speciality}</p>
                <p>Address:</p>
                <p>{item.docData.address.line1}</p>
                <p>{item.docData.address.line2}</p>
                <p><span>Date & Time:</span>{slotDateFormat(item.slotData)}|{item.slotTime}</p>
              </div>
              <div>

              </div>
              <div>
                {!item.cancelled && item.payment && <button>Paid</button>}
                {!item.cancelled && !item.payment &&<button onClick={()=>appointmentRazorpay(item._id)}>Pay Online</button>}
                {!item.cancelled && <button onClick={()=>cancelAppointment(item._id)}>Cancel appoinment</button>}
                {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MyAppointments