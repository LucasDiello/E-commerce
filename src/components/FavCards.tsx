import logoIphone from '../img/logoIphone.png'

function FavCards() {
  return (
    <section className="bg-[rgb(19,17,17)] p-8 pt-[120px]  fav-container flex flex-wrap ">
      <div className='flex-[50%]   sub-container-fav'>
          <h1 className='title-fav mt-14 text-gray-300 mb-10'>Iphone 13 128gb</h1>
          <p className='text-[rgb(192,191,191)] xs:text-sm'>O iPhone 13 e o iPhone 13 Mini são smartphones projetados, desenvolvidos, comercializados e vendidos pela Apple Inc. Eles são a décima quinta geração de iPhones (sucedendo ao iPhone 12 e iPhone 12 Mini). Eles foram apresentados em um evento da Apple no Apple Park em Cupertino, Califórnia, em 14 de setembro de 2021, juntamente com os carros-chefe iPhone 13 Pro e iPhone 13 Pro Max com preços mais altos. As pré-encomendas para o iPhone 13 e iPhone 13 Mini começaram em 17 de setembro de 2021. Eles foram lançados oficialmente em 24 de setembro de 2021.</p>
      </div>
      <div className='flex-[50%]  flex justify-end items-center'>
          <img  src={logoIphone} className='w-[700px]  xs:opacity-50' alt="" />
      </div>
      </section>
  )
}

export default FavCards