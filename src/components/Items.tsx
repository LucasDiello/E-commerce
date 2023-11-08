import { useEffect } from 'react'
import '../App.css'
import Header from './Header'
import { getProductsFromCategoryAndQuery } from '../services/fetch';
import { useItemsContext } from '../context/ItemsContext';
import Item from '../interfaces/Item';

function Items() {
  const { items, setItems } = useItemsContext();

  useEffect(() => {
    (async() => {
      const itemsInitial = await getProductsFromCategoryAndQuery('MLB1055', 'iphone');
      setItems(itemsInitial.data.results);
    })()
  },[]);
  
  return (
    <main>
        <Header />
        <section className=' flex justify-center flex-wrap p-1  '>
          {
            items.map((item : Item) => {
              return (
                <div className='p-2 shadow-items  mr-2 mb-2  w-[190px] h-[180px]' key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <div>
                  <h3 className='text-[10px] mt-3'>{item.title.substring(0,70)}</h3> 
                  <div className='flex justify-between w-full h-[50px]'>
                  <p className='mt-2'>{item.price} R$</p>
                  <button className='mt-2 h-0'>Comprar</button>
                  </div>
                  </div>
                </div>
              )
            })
          }
        </section>
    </main>

  )
}

export default Items