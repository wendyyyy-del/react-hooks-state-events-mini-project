import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, changeFormData] = useState({
    text : '',
    category : 'Code'
  });

 const categoryOptions = categories.map(category => {
  if(category !== 'All'){
 return (<option value={category} key={category}>{category}</option>)
  }
})

function handleFields(e){
  const{name,value}=e.target
  changeFormData({...formData,[name]:value})
  
}






  return (
    <form className="new-task-form" onSubmit={(event) => {
      event.preventDefault()
      onTaskFormSubmit(formData)
    }}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleFields}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleFields}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;