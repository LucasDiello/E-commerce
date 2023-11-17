import { useEffect} from 'react'
import Header from '../components/Header'
import { useItemsContext } from '../context/ItemsContext';
import { getProductsFromCategoryAndQuery } from '../services/fetch';
import Items from '../components/Items';
import Footer from '../components/Footer';
import FavCards from '../components/FavCards';

function Products() {
  const { items, setItems } = useItemsContext();

  useEffect(() => {
    (async() => {
      const itemsInitial = await getProductsFromCategoryAndQuery('MLB1055', 'iphone');
      setItems(itemsInitial.data.results);
    })()
  },[setItems]);

  
  return (
    <><main className='bg-gray-200'>
      <Header />
        <FavCards />
      <section className=' border-2 border-black xs:p-0 flex justify-center p-8 flex-wrap'>
          {Items(items)}
      </section>
    </main>
    <Footer /></>

)
}

export default Products;