import React,{useState,useEffect} from 'react';
import Form from './components/Form'
import ToDo from './components/ToDo'

function App(){
  const [toDo,setToDo]= useState([
    {text:''}
  ])
  useEffect(()=>{
    if (localStorage.getItem('todo')===null){
      localStorage.setItem("todo",JSON.stringify([{text:'Created By Ahmad !'}]))
    }

    setToDo(JSON.parse(localStorage.getItem("todo")));

  },[])


  function addTo(textValue){
    if (textValue.trim().length>0){
      const lclStrg= JSON.parse(localStorage.getItem("todo"))
      lclStrg.push({text:textValue})
      setToDo(lclStrg)
      localStorage.setItem('todo',JSON.stringify(lclStrg))
    }
    
  }
  function Delete_(index){
    const lclStrg= JSON.parse(localStorage.getItem("todo"))
    lclStrg.splice(index,1)
    setToDo(lclStrg)
    localStorage.setItem('todo',JSON.stringify(lclStrg))
  }
  function Complete_(index){
    const lclStrg= JSON.parse(localStorage.getItem("todo"))
    lclStrg[index].isCompleted= true
    setToDo(lclStrg)
    localStorage.setItem('todo',JSON.stringify(lclStrg))
  }
  
  return(
    
    <div className='text-center w-screen select-none'>
      <Form  addTo= {addTo} />

      <div>
        {toDo.map((todo,index)=> 
          <ToDo key={index} index={index} todo={todo} Delete_={Delete_} Complete_={Complete_}/>
        ) } 
      </div>

    </div>

  )
}



export default App
