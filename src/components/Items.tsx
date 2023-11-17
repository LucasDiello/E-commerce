import { useState } from 'react';
import '../App.css'
import { useItemsContext } from '../context/ItemsContext';
import Item from '../interfaces/Item';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";


function Items(items: Item[]) {

  const { cart, setCart } = useItemsContext();
  const [currentPage, setCurrentPage] = useState(1);

  const handleCart = (item : Item) => {
    const existInCart = cart.some((cartItem) => cartItem.id === item.id);
     (!existInCart) && setCart((prevCart) => [...prevCart, item]);
   
  }

  const lastItem = currentPage * 15;
  const firstItem = lastItem - 15;
  const currentItems = items.slice(firstItem, lastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return ( <div className='flex flex-wrap mt-5 justify-center '>
  {  currentItems.map((item : Item) => {
      return <div key={item.id} className={'xs:w-[180px]  p-2 mb-10 w-[250px] '}>
        <div className='border-2 border-solid h-[200px] rounded-2xl bg-white flex justify-center items-center'>
         <img className='h-[100px] w-[100px]  ' src={item.thumbnail} alt={item.title} />
        </div>
         <div className='border-2 border-solid  h-20'>
           <h3 className=' mt-4  title-card'>{item.title.substring(0, 45)}</h3>
             <div className='flex justify-between mt-4 h-[100% items-center] '>
               <p className=''>{item.price} R$</p>
               <button onClick={() => handleCart(item)} className='btn-buy  h-0'>Comprar</button>
             </div>
         </div>
         </div>
       })
       }
       <div className='border-2 w-[100%] flex justify-end'>
        <button onClick={prevPage} className='p-4 flex items-center'>
          <AiOutlineCaretLeft className="mr-2" />
          prev page
        </button>
       <button onClick={nextPage} className='p-4 flex items-center'>
        next page
       <AiOutlineCaretRight className="ml-2"/>
       </button>
       </div>
  </div>
  )
}

export default Items