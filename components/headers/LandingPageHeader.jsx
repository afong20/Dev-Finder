import Image from 'next/image'
import bannerImage from './../../public/banner.jpg'
function LandingPageHeader() {  return (
    <header className='text-center'>
       
      <figure className='flex flex-col justify-center items-center pt-[4rem] pb-[2rem] bg-gradient-to-r from-yellow-600 to-red-600'>
        <figcaption className=''>
            <img className='w-[98px] mx-auto' src='favicon.svg' alt='Drinks Ahoy'/>
          <h1 className='text-5xl text-slate-900 font-bold'>
            Drinks Ahoy! 
          </h1>
          <p className='text-2xl my-[0rem] text-slate-900'>Drinks that will sail your thirst away.</p>
        </figcaption>
      </figure>
      <div className='flex justify-center items-center'>
        <Image 
            src={bannerImage}
            alt='Coffee,Tea,Drinks Served to sail your thirst away'
            className='w-2/5'
        />
      </div>
    </header>
  );
}

export default LandingPageHeader;