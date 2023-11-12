import { useState } from "react";
import data from "../data";

function ToDo(props) {

  const [toDoInput, setToDoInput] = useState('')

  const [addingToDo, setAddingToDo] = useState(false)

  
  function handleSubmit(e) {
    e.preventDefault();
    props.innerToDo.push(toDoInput)
    props.rander((p) => !p )
    setToDoInput('')
    setAddingToDo(false)
  }
  
  
  function handleAddingToDo() {
    setAddingToDo((prev) => !prev) 
    props.rander((p) => !p )
  }

  const removeProjectList = () => {
    
    let Object = props.fullObject ;
    const i = data.indexOf(Object);
    if (i !== -1) {
      data.splice(i, 1);
    }
    props.rander((p) => !p )

  };

  const removeToDo = (index) => {
    
    let innerToDoArray = props.innerToDo ;
    const i = innerToDoArray.indexOf(index);
    if (i !== -1) {
      innerToDoArray.splice(i, 1);
    }
    props.rander((p) => !p )

  };


  const renderInnerToDo = props.innerToDo.map((index) => {
    
    const randomId = Math.random() * 10
    return (
      <p className="todo" key={randomId} onClick={() => removeToDo(index)}>
        {index}
      </p>
    );
  });



  return(
    <>
      <div className="todo--list">

        <div className="todo--list-header">
          <h2>{props.name}</h2>
          <div className="remove" onClick={() => removeProjectList()}>&#215;</div>
        </div>

        <div className="todo--list-content">
          {renderInnerToDo}
          
        </div>

        <div className="add-todo--container">
          {addingToDo ?
          <form className="add-todo--form" onSubmit={handleSubmit}>
            <input className="todo--inp" placeholder="Add ToDo" value={toDoInput} onChange={e => setToDoInput(e.target.value)}/>
            <button className="add-todo--btn" type="submit"  >&#10004;</button>
          </form>
          :
          <button className="add-todo--btn" onClick={handleAddingToDo}>
            &#43;
          </button>}
        </div>

      </div>
    </>
  )  
}

export default ToDo;