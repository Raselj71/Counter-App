import React, { useState } from 'react'
import { FaPlus, FaMinusCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

export default function Count() {
       const[count, setcount]=useState(0)

       const handleIncrement=()=>{
           setcount(count+1)
       }

       const handleDecrement=()=>{
         setcount(count-1)
       }

       const hanldeReset=()=>{
        setcount(0)
       }

  return (
    <div className='main'>
          <h2 className='app' >Counter App</h2>
         <div className='main_container'>
         <h2 className='count_text'>Count: {count}</h2>
        
            <div>
                 <button  className='button' onClick={handleIncrement}><FaPlus className='icon'/></button>
                 <button   className='button' onClick={handleDecrement}> <FaMinusCircle className='icon'/> </button>
                 <button className='button' onClick={hanldeReset}><GrPowerReset className='icon'/></button>
            </div>

         </div>
         
         
    </div>
  )
}
