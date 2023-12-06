import Image from "next/image"

interface buttonProps {
    onClick: ()=>{},
    alt: string,
    type?: 'button' | 'submit',
    label?: string,
    icon?: string,
    variant?: string,
}

const Button = ({onClick, label, icon, variant, alt, type}: buttonProps) => {
    return ( 
        <button 
            className={`flexCenter gap-3 rounded-full border ${variant}`} 
            type={type ?? 'button'} 
            onClick={onClick}
            >
                {icon && 
                <Image src={icon} alt={alt} width={24} height={24} />}
                {label && 
                <label className="bold-16 whitespace-nowrap">
                    {label}
                </label>}
        </button>
    )
}
export default Button