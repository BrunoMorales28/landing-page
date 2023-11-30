import Image from "next/image"
import Link from "next/link"
import CONSTANTS from "@/constants"

const NavBar = () => {
    const home_navLink = CONSTANTS.NAV_LINKS[0]
    const generalNavLinks = CONSTANTS.NAV_LINKS.slice(1)
    return <nav className='border-2 flex-between max-container p-container relative z-30 py-5'>
            <ul className='hidden h-full gap-12 lg:flex '>
                    <Link href={home_navLink.href} className='regular-16 border-1  cursor-pointer pb-1.5 transition-all hover:font-bold'
                        >
                            <Image src={home_navLink.icon ?? ''} alt={home_navLink.key} width={24} height={24} />
                            {home_navLink.label}
                        </Link>
                    {
                    generalNavLinks.map(
                        (navLink) => (
                            <Link href={navLink.href} key={navLink.key} className='regular-16 border-1  cursor-pointer pb-1.5 transition-all hover:font-bold'
                            >
                                <Image src={navLink.icon ?? ''} alt={navLink.key} width={24} height={24} />
                                {navLink.label}
                            </Link>
                        )
                    )
                }
            </ul>
    </nav>
}
export default NavBar