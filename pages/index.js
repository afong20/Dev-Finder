import Head from 'next/head'

export default function Home() {
  return (
          <>
            <Head>
              <meta name='description' content='Find the best devs for your business.' />
              <title>Dev Finders</title>
            </Head>
            <header className='text-center py-[4rem] bg-zinc-300'>
              <img className='w-[98px] mx-auto' src='favicon.svg' alt='Dev Finders'/>
              <h1 className='text-5xl text-slate-600'>Dev Finders</h1>
              <p className='text-2xl my-[1rem] text-slate-600'>Finding devs perfect for your business.</p>
            </header>       
          </>
  )
}
