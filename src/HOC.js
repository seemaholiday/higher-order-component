import React, {useState} from 'react'

const  Higherordercom=(Student)=> {
    const Highrordercominner =() =>{
        const [num, setNum] = useState(0)
        const handleEvent=()=>{
            setNum(num+10)
        }
        return(
            <Student num={num} handleEvent={handleEvent}/>
        )
    }
  return Highrordercominner;
}
export default Higherordercom
