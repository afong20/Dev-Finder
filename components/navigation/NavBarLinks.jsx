import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-4 text-slate-600 font-bold ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/teas">Teas</Link>
        </li>
        <li>
          <Link href="/coffees">Coffees</Link> 
        </li>
        <li>
          <Link href="/sodas">Sodas</Link> 
        </li>
        <li>
          <Link href="/others">Others</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;