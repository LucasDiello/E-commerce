import React, { useEffect, useState } from 'react'
import "../menu.css"
import { getCategories } from '../services/fetch'

function Menu() {

  type Category = {
    id: string;
    name: string;
  }
  
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getCategories();
      const desiredIds = ["MLB1039", "MLB1051", "MLB5726", "MLB1000", "MLB1144"];
      const filteredCategories = data.filter((category : Category ) => desiredIds.includes(category.id));
      setCategories(filteredCategories);
      console.log(filteredCategories)
    })();
  },[])

  const handleClick = (category) => {
    console.log(category)
  }

  return (
    <nav className="menu">
      {categories.map((category : Category) => {
        return (
          <button onClick={() => handleClick(category)} className="menu-item" key={category.id}>
            {category.name}
          </button>
        )
      })}
  </nav>
  )
}

export default Menu