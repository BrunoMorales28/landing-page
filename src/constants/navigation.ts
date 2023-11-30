type navLink = {
    href: string,
    key:string,
    label:string,
    icon:string
}

const NAV_LINKS: navLink[] = [{
    href: '/', key: 'home', label: 'Home', 
    icon:  '/shield-halved-solid.svg',
},
{
    href: '/aboutUs', key: 'aboutUs', label: 'About us', 
    icon:  '/shield-halved-solid.svg',
},
{
    href: '/services', key: 'services', label: 'services', 
    icon:  '/shield-halved-solid.svg',
},
{
    href: '/plans', key: 'plans', label: 'Available plans', 
    icon:  '/shield-halved-solid.svg',
},
]

export default NAV_LINKS