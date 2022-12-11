import React,{useState} from 'react';
import { AiOutlinePlus} from "react-icons/ai";

function Form ({addTo}){
    const [Value,setValue]= useState([''])
    function onSubmit(event){
        
        event.preventDefault()
        addTo(Value)
        setValue("")
    }
    return (
        <div>
            <h1 className='mt-12 font-mono text-4xl md:text-5xl italic'>ToDo List Tracker</h1>
            <form onSubmit={onSubmit} className="flex justify-center items-center mt-12 select-none text-center">
                <input type="text" className='w-8/12  md:w-2/4  rounded  border-2 border-sky-700 h-12 font-mono text-center  focus:ring-2 focus: ring-sky-700 focus:shadow-2xl' value={Value} onChange={e => setValue(e.target.value)} placeholder="Enter The Task Here..."/>
                <AiOutlinePlus className='h-20 w-12  m-0 cursor-pointer p-0 ' onClick={onSubmit}/>
            </form>
        </div>

    )
}
export default Form