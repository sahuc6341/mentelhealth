import { createContext } from "react";

export const Appcontext=createContext()

const AppcontextProvider=(props)=>{
      const currency='$'
     const calculateAge=(dob)=>{
        const today=new Date()
        const birthDate=new Date(dob)
        let age=today.getFullYear()- birthDate.getFullYear()
        return age
     }
     const months =[" ","Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
  
     const slotDateFormat=(slotDate)=>{
       const dateArray=slotDate.split('_')
       return dateArray[0]+" "+months[Number(dateArray[1])]+" "+dateArray[2]
     }
    const value={
         calculateAge,
         slotDateFormat,
         currency
    }
    return(
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}

export default AppcontextProvider