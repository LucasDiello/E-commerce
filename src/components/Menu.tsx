import { useEffect, useState } from 'react'
import "../menu.css"
import { getCategories, getProductsFromCategoryAndQuery } from '../services/fetch'
import { useItemsContext } from '../context/ItemsContext';

function Menu() {

  type Category = {
    id: string;
    name: string;
  }
  
  const [categories, setCategories] = useState([]);
  const { setItems } = useItemsContext();

  useEffect(() => {
    (async () => {
      const { data } = await getCategories();
      const desiredIds = ["MLB1039", "MLB1051", "MLB5726", "MLB1000", "MLB1144"];
      const filteredCategories = data.filter((category : Category ) => desiredIds.includes(category.id));
      setCategories(filteredCategories);
    })();
  },[])

  const handleClick = async (category : Category) => {
    const { data } = await getProductsFromCategoryAndQuery(category.id, category.name);
    setItems(data.results);
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