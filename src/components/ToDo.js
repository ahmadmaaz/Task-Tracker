import React from "react";
import { BsFillTrash2Fill } from 'react-icons/bs';
import { BsFillAwardFill } from 'react-icons/bs';

function ToDo({todo, index,Delete_,Complete_}){
    return (
        <div className="flex justify-center pt-4 ">
            <li className="block z-0 text-black w-11/12 md:w-8/12 rounded text-2xl  font-mono text-left bg-sky-400  px-2 py-4 hover:font-black"   style={{ textDecoration: todo.isCompleted ? "line-through" : "" ,backgroundColor: todo.isCompleted? 'green' : '', opacity : todo.isCompleted ? "	0.7" :'	 1'}}>
                {todo.text}
                
                    <BsFillTrash2Fill  className="float-right text-4xl text-red-500 hover:text-red-800 cursor-pointer"   onClick={()=>{ Delete_(index)}}/>
                    <BsFillAwardFill  className="float-right text-4xl text-yellow-300 hover:text-yellow-600 cursor-pointer"  onClick={()=>{Complete_(index)}}/>
            
            </li>
        </div>
    )
}


export default ToDo