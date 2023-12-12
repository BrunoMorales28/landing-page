import Image from "next/image"
import Link from "next/link"
import {NAV_LINKS} from "@/constants"
import Button from "../Button/Button"

const NavBar = () => {
    const home_navLink = NAV_LINKS[0]
    const generalNavLinks = NAV_LINKS.slice(1)
    return <nav className='border-2 flex-between max-container p-container relative z-30 py-5'>
            <div className="lg:flexCenter hidden">
                <Image
                    src={NAV_LINKS[0].href}
                    alt={NAV_LINKS[0].key}
                />
            </div>
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
            <div className="lg:flexCenter hidden">
                <Button onClick={()=>()=>{}} alt='' />
            </div>
    </nav>
}
export default NavBar