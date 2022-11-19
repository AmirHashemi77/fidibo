import React, { useRef } from 'react';
import { useNavigate } from 'react-router';


const SidebarCheckbox = ({title ,id}) => {
    const el =useRef()
    // const [checked,setChecked]=useState(false)
    const navigate=useNavigate()
  
    const handelChange=()=>{
        
        if(el.current.checked){
            navigate(`?sort=${title}`,)
           
        }else{
            navigate('')
        }
        
    }  
    
        
        
  
    return (
        <div className='flex flex-row-reverse items-center justify-end'>
            <label className='m-2'>{title}</label><input  onChange={handelChange} ref={el} type="checkbox"/>
            
        </div>
    );
};

export default SidebarCheckbox;