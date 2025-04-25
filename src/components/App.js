import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
const [displayTasks, changeTasks] = useState(TASKS)
const [categories, setCategories] = useState(CATEGORIES);
const [btnClass, setBtnClass] = useState('All');


  function deletesItem(deletedItem){
    changeTasks(displayTasks.filter((item)=>item.text !== deletedItem))
  }

  function addItemtoList(newItem){
    changeTasks([...displayTasks,newItem])
  }



 const filteredTasks = displayTasks.filter((tasker) => 
  (btnClass === 'All' || btnClass === tasker.category)
  )

  console.log(filteredTasks)




  // changeTasks(filteredTasks)



  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter  
      categories={categories} 
      btnClass={btnClass} 
      setBtnClass={setBtnClass}
      />

      <NewTaskForm  categories={categories} onTaskFormSubmit={addItemtoList}/>
      <TaskList tasks={filteredTasks} deletesItem={deletesItem} />
    </div>
  );
}

export default App;