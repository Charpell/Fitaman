import Link from 'next/link';

const Nav = () => {
  return ( 
    <div>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
      <Link href="/sell">
        <a>Home!</a>
      </Link>
    </div>
   );
}
 
export default Nav;