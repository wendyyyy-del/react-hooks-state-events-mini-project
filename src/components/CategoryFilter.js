
import React, {useState} from "react";


function CategoryFilter({categories, btnClass, setBtnClass}) {

  const displayCategoryBtns = categories.map(category => (
  <button key={category} 
  className={(btnClass === category)? 'selected' : ''} onClick={() => setBtnClass(category)}>
    {category}
  </button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayCategoryBtns}
    </div>
  );
}

export default CategoryFilter;
