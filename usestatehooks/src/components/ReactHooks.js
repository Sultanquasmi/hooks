import { useState } from "react"
import React  from 'react'


const ReactHooks = () => {
  
    const myArray = [
        {
            id:1 , Name:'Sultan Quasmi' , Age:23
        },
        {
            id:2 , Name:'Rohan kundara' , Age:20
        },
        {
            id:3 , Name:'Lakhan' , Age:21
        },
        {
            id:4 , Name:'Suyash' , Age:25
        }
    ]
    const [myValue ,setMyValue ] = useState( myArray)
    const vanished = (()=>{
        setMyValue([]);
    })

  return (
    <>
   {
    myValue.map((currElem)=>{
        return <h1 className='hstyle'>Name:{currElem.Name} & Age:{currElem.Age}</h1>
    })
   }
   <button className='btn' onClick={vanished}>Click me to vanish</button>
   </>
  )
}

export default ReactHooks