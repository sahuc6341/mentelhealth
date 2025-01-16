import React, { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Navbar = () => {
    const navigate = useNavigate()
    const{token,setToken,userData}=useContext(AppContext)

     const[showMenu,setShowMenu]=useState(false)
     const logout=()=>{
      setToken(false)
      localStorage.removeItem('token')
     } 
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')}  className="w-40 cursor-pointer" src={assets.logo} alt="" />
      <ul className=" hidden md:flex items-start gap-5 font-medium">
        <NavLink to='/'>
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-yellow-500 w-5/5 m-auto hidden" />
        </NavLink>
        <NavLink to='contact'>
          <li className="py-1">Check yourself</li>
          <hr className=" border-none outline-none h-0.5  bg-pink-500 w-4/5 m-auto hidden"  />
        </NavLink>
        <NavLink to='/doctors'>
          <li className="py-1">Doctors</li>
          <hr className=" border-none outline-none h-0.5  bg-yellow-600  w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to='/Info'>
          <li className="py-1">Info</li>
          <hr className="border-none outline-none h-0.5 bg-yellow-500 w-5/5 m-auto hidden" />
        </NavLink>
       
        <NavLink to='/about'>
          <li className="py-1">ABOUT</li>
          <hr className=" border-none outline-none h-0.5  bg-yellow-600  w-4/5 m-auto hidden"  />
        </NavLink>
        <NavLink to='/Home'>
          <li className="py-1">Meditation-List</li>
          <hr className=" border-none outline-none h-0.5  bg-pink-500 w-4/5 m-auto hidden"  />
        </NavLink>
      
        <NavLink to='Chat'>
          <li className="py-1">Chat AI</li>
          <hr className=" border-none outline-none h-0.5  bg-pink-500 w-4/5 m-auto hidden"  />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
            token && userData
            ?<div className="flex items-center gap-2 cursor-pointer group relative">
                <img className="w-8 rounded-full" src={userData.image} alt="" />
                <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
                    <div className="min-w-60 bg-stone-100 rounded flex flex-col gap-2 p-4">
                        <p onClick={()=>navigate('my-profile')}className="hover:text-black cursor-pointer  hover:bg-white">My Profile</p>
                        <p onClick={()=>navigate('my-appointment')} className="hover:text-black cursor-pointer  hover:bg-white">My Appointment</p>
                        <p onClick={logout} className="hover:text-black cursor-pointer hover:bg-white" >Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className="bg-pink-500 text-white px-8 py-3 rounded-full 
            font-light hidden md:block">Create Account</button>
        }
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        <div className={ `${showMenu ?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div  className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ">
            <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded  inline-block'>Home</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded  inline-block'>All Doctors</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded  inline-block'>About</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded  inline-block'>Check Yourself</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
