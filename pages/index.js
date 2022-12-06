import Head from 'next/head'
import {LandingPageHeader} from '../components/headers'
import { NavBar } from '../components/navigation'
export default function Home() {
  return (
          <>
            <Head>
              <meta name='description' content='Find the best devs for your business.' />
              <title>Drinks Ahoy</title>
            </Head>

            <LandingPageHeader/>
            <main>
   
            </main>
          </>
  )
}
