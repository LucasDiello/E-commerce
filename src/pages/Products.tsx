import { useEffect, useRef, useState } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Header from '../components/Header'
import { useItemsContext } from '../context/ItemsContext';
import { getProductsFromCategoryAndQuery, getSearchItem } from '../services/fetch';
import Items from '../components/Items';
import Footer from '../components/Footer';
import FavCards from '../components/FavCards';

function Products() {
  const { items, setItems } = useItemsContext();
  const [itemsCaroussel, setItemsCaroussel] = useState([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async() => {
      const itemsInitial = await getProductsFromCategoryAndQuery('MLB1055', 'iphone');
      const itemsCaroussel = await getSearchItem('computador');
      setItemsCaroussel(itemsCaroussel.data.results);
      setItems(itemsInitial.data.results);
    })()
  },[setItems]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - carouselRef.current.offsetWidth,
        behavior: 'smooth', 
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + carouselRef.current.offsetWidth,
        behavior: 'smooth', 
      })
    }
  };
  
  return (
    <><main className='bg-gray-200 mb-10'>
      <Header />
      <section className='lg:p-10  flex justify-center flex-wrap'>
        <div className='mt-36 flex btn-prev md:hidden'>
          <button className='btn-caroussel' onClick={scrollLeft}>
            <AiOutlineArrowLeft size="30px" />
          </button>
          <div className='carousel md:w-[1000px]  ' ref={carouselRef}>
            {Items(itemsCaroussel, false)}
          </div>
          <button className='btn-caroussel' onClick={scrollRight}>
            <AiOutlineArrowRight size="30px" />
          </button>
        </div>
        <FavCards />
        <div className='w-[100%] mt-5 flex flex-wrap xs:mb-10 p-1 justify-center items-center'>
          {Items(items, true)}
        </div>
      </section>
    </main>
    <Footer /></>

)
}

export default Products;