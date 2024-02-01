import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
function Select({items,onChange}) {
 const [currItem,setCurrItem] = useState(items?.[0]);
 const [display,setDisplay] = useState("none");
 const  selectRef = useRef()
 const optionsRef = useRef()




useEffect(()=>{

document.addEventListener("click",(ev)=>{

  if(!selectRef.current.contains(ev.target)){
    setDisplay("none")
  }

})

},[])

  return (
    <div className='select-container'>
     <div className='select-head' ref={selectRef}
     
      onClick={(ev)=>{
         setDisplay((prevDisplay)=>{
            if(prevDisplay==="none") return "block";
            return "none";
            
         })
         ev.stopPropagation();
         selectRef.current.focus();
        
      }}
     
     tabIndex={0}>
      <div>{currItem}</div>
    </div>  
     <div className='select-items' ref={optionsRef} style={{display}}>
        {items?.map((val,idx)=>{
            return <div   className={currItem===val?"active-item":""}
            onClick={(ev)=>{
                setCurrItem(val);
                setDisplay("none")
                 onChange(val);
                ev.stopPropagation();
                

            }}
          
            >
        {val}
        </div>
        })}
    </div>    
    </div>
  )
}

export default Select
