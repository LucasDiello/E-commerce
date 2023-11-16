import Item from '../interfaces/Item'
import { useItemsContext } from '../context/ItemsContext';
import { AiOutlineDelete } from "react-icons/ai";
import { PiTruckLight } from "react-icons/pi";
import { toast } from 'react-toastify';
import Toastfy from './Toastfy';


function CartLowScreen({itemsCart } : {itemsCart: Item[]}) {
    const { setCart } = useItemsContext();

  
    const handleDelete = (id: string) => {
      const newCart = itemsCart.filter((item) => item.id !== id);
      setCart(newCart);
    };

    const totalValue = itemsCart.reduce((acc, item) => acc + item.price, 9.50);
    const verifyFrete = () => {
        toast.success("Frete Grátis! :)");
    }

    const handleSubmit = () => {
        if(!itemsCart.length) return toast.error("Porfavor, adicione itens ao carrinho");
        
        toast.success("Parabéns pela compra!");
    }
    

    const totalValueX4 = totalValue / 4;


  return (
    <section className='h-[100%] border-2 bg-[rgb(248,248,248)]'>
      <div className=' p-10 h-[100%] mt-6'>
        <div className=' h-[20vh] overflow-x-auto'>
            {itemsCart.map((item) => {
                return (
                    <div className='flex justify-between border-b-[1px] border-black'>
                        <div className=' flex'>
                        <img src={item.thumbnail} alt={item.title} className='opacity-90' />
                        <div className='p-2'>
                    <h3 className='text-black text-sm title-minscreen mb-2'>{item.title.substring(0,15)}</h3>
                    <p className='text-black price-minscreen'>R${item.price}</p>
                            </div>
                            </div>
                    <div className='flex flex-col items-center '>
                    <button onClick={() => handleDelete(item.id)} className='text-white flex items-center h-[40px]'><AiOutlineDelete size="25px" color="black"/> </button>
                        </div>
                    </div>
                )
            })}
        </div>
            <div className='border-b-[1px] pb-4 mt-10 flex justify-between'>
                <h1>SubTotal <span className='text-[12px]'>(sem frete):</span></h1><span>R${itemsCart.length ? totalValue.toFixed(2) : "0"}</span>    
            </div>
            <div className='mt-10 pb-4 border-b-[1px] flex justify-between'>
                <div className='flex'>
                <PiTruckLight size="25px" />
                <input maxLength={8} type="number" className='h-6 ml-4 w-[100px] cart-minscreen border-2 border-black' />
                </div>
                <button onClick={verifyFrete}
                 className='h-10 p-2 font-bold  bg-gray-200 frete-minscreen text-sm'>Calcular FRETE</button>
            </div>
            <Toastfy />
    <div className=' mt-20 flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Total:</h1>
        <div>
        <h2 className='text-right'>R${itemsCart.length ? totalValue.toFixed(2) : "0"}</h2>
            <p className='text-[10px]'>ou até 4x de <span className='font-bold'>{`${totalValueX4.toFixed(2)}`}</span> sem juros</p>
        </div>
    </div>
        <div className='mt-10'>
            <button onClick={handleSubmit} className='bg-black w-[100%] h-12 text-white btnfinish-minscreen'>Finalizar Compra</button>
        </div>
    </div>
    </section>
  )
}

export default CartLowScreen