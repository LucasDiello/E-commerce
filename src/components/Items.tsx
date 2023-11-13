import '../App.css'
import Item from '../interfaces/Item';

function Items(items: Item[], detailedView: boolean) {

  return (
   
    items.map((item : Item) => {
      return <div key={item.id} className={` ${detailedView && 'shadow-items p-2 mr-2 mb-2 w-[190px] h-[180px]'} ${!detailedView && 'carousel-item h-[130px]'}`}>
         <img src={item.thumbnail} alt={item.title} />
           <h3 className='text-[10px] mt-3'>{item.title.substring(0, detailedView ? 60 : 10)}</h3>
           {detailedView && (
             <div className='flex justify-between w-full h-[50px]'>
               <p className='mt-2'>{item.price} R$</p>
               <button className='mt-2 h-0'>Comprar</button>
             </div>
           )}
         </div>
       })
  )
}

export default Items