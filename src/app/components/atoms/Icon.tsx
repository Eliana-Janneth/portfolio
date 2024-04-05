type IconProps = {
    iconName: string
    size?: string
}

export default function Icon({iconName,size}: IconProps) {
    return (
        <span className={`${iconName} ${size} text-pink-900 hover:text-pink-500`}></span>
    )
}

