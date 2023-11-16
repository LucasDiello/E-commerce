import destaques from "../utils/destq.products";

function FavCards() {
  return (
    <section className="mt-36 border-2 card-container h-[33em] items-center rounded-[10px] md:hidden xs:hidden lg:flex">
          <h1 className='xs:hidden absolute left-[420px] destaques top-[175px] text-[rgb(25,25,25)]'>Destaques</h1>
      {
        destaques.map((destaque) => {
          return (
              <div className='p-10 '>
            <div key={destaque.id} className='card-fixed w-[280px] bg-black rounded-md flex flex-col justify-center items-center'>
              <img src={destaque.img} className='opacity-40 rounded-md w-[100%] h-[400px] object-cover' />
            </div>
            <div>
                <h3 className='xs:hidden text-[20px] mt-3 absolute top-[252px] p-2 text-gray-300 title-destaques'>{destaque.title}</h3>
              </div>
              </div>
          )
        })
      }
      </section>
  )
}

export default FavCards