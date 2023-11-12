import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './camponents/Header'
import ToDo from './camponents/ToDo'
import AddToDo from './camponents/AddToDo'
import data from './data'
import { useEffect, useState } from 'react'
function App() {
  
  const [render,setRender] = useState(false)
  const renderToDo = data.map((prop) => {
    return (
      <ToDo
        key = {prop.id}
        name = {prop.toDoName}
        innerToDo = {prop.innerToDo}
        fullObject = {prop}
        rander = {setRender}
      />
    ) 
    
  })

  useEffect(() => {
    console.log(data);
    localStorage.setItem('todoData', JSON.stringify(data))
  }, [render]);

  return (
    <>
      <Header/>

      <div className='todo--container'>
        {renderToDo}
      </div>

      <AddToDo
        data = {data}
        rander = {setRender}
      />
    </>
  )
}

export default App;
