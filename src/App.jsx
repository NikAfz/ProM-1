import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './camponents/Header'
import ToDo from './camponents/ToDo'
import AddToDo from './camponents/AddToDo'
import data from './data'
import { useEffect, useState } from 'react'
import Blobs from './camponents/blobs'


function App() {
  
  const [dataState, setData] = useState(data)

  const [render,setRender] = useState(false)

  useEffect(() => {
    console.log(dataState);
    localStorage.setItem('todoData', JSON.stringify(dataState));
  }, [render]);

  function RenderToDo(props) {
    return (
      <ToDo
        name={props.name}
        ToDo={props.todo}
        fullObject={props.object}
        rander={setRender}
      />
      
    );
  }
  
  return (
    <>
      <Blobs/>

      <Header/>

      {/* {renderToDo} */}
      <div className='todo--container'>
        {dataState.map((item) => {
          return(
            <RenderToDo key={item.id} object={item} name={item.toDoName} todo={item.innerToDo} />
          )
        })}
      </div>

      <AddToDo
        data = {dataState}
        rander = {setRender}
      />
    </>
  )
}

export default App;
