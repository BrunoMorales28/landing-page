import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
    return <nav className='border-2 flex-between max-container p-container relative z-30 py-5'>
        <Link href='/home' >
            <Image src='/shield-halved-solid.svg' alt='logo' width={24} height={24} />
        </Link>
    </nav>
}
export default NavBar