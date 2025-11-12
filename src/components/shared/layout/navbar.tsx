import Link from 'next/link'
import SideBar from './sidebar';
import CartLogo from '../../ui/cartlogo';

const Navbar = () => {
  return (
    <nav className='container flex items-center py-[24px] justify-between'>
        <div className='flex gap-[16px] items-center'>
            <div className='md:hidden'>
                <SideBar />
            </div>
            <div className='font-inter font-black text-[22px] sm:text-[32px]'>
                <Link href="/">
                    SHOP.CO
                </Link>
            </div>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex items-center gap-[24px] w-full'>
                <li className='hover:font-bold'><Link href={'/'}>Home</Link></li>
                <li className='hover:font-bold'><Link href={'/shop'}>On Sale</Link></li>
                <li className='hover:font-bold'><Link href={'/contruction'}>New Arrivals</Link></li>
                <li className='hover:font-bold'><Link href={'/contruction'}>Brands</Link></li>
            </ul>
        </div>

        <div className=''>
            <CartLogo/>
        </div>
    </nav>
  )
}

export default Navbar