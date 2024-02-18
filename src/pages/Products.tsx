import { useEffect} from 'react'
import Header from '../components/Header'
import { useItemsContext } from '../context/ItemsContext';
import { getProductsFromCategoryAndQuery } from '../services/fetch';
import Items from '../components/Items';
import Footer from '../components/Footer';
import FavCards from '../components/FavCards';

function Products() {
  const { setItems, items } = useItemsContext();

  useEffect(() => {
    (async() => {
      const itemsInitial = await getProductsFromCategoryAndQuery('MLB1055', 'iphone');
      setItems(itemsInitial.data.results);
    })()
  },[setItems]);

  
  return (
    <>
    { 
    items.length === 0 ? <div className='h-[100vh] w-[100%] bg-gray-200 flex justify-center items-center'>Loading...</div> :
      <>
      <main className='bg-gray-200'>
          <Header />
          <FavCards />
          <section className=' xs:p-0 flex justify-center p-8 flex-wrap'>
            <Items />
          </section>
        </main>
        <Footer />
        </>

    }
    </>

)
}

export default Products;