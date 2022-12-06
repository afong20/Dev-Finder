import Image from 'next/image'
import bannerImage from './../../public/banner.jpg'
function LandingPageHeader() {  return (
    <header className='text-center py-[4rem] bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500'>
       
      <figure className='flex flex-col justify-center items-center
      md:flex-row  gap-8
      '>
        <figcaption>
            <img className='w-[98px] mx-auto' src='favicon.svg' alt='Drinks Ahoy'/>
          <h1 className='text-5xl text-slate-900 font-bold'>
            Drinks Ahoy! 
          </h1>
          <p className='text-2xl my-[0rem] text-slate-900'>Drinks that will sail your thirst away.</p>
        </figcaption>
        
        <Image 
          src={bannerImage}
          alt='Coffee,Tea,Drinks Served to sail your thirst away'
        />


      </figure>
    </header>
  );
}

export default LandingPageHeader;