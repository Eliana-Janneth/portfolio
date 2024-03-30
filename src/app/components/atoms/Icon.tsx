type IconProps = {
    iconName: string
    size?: string
}

export default function Icon(props: IconProps) {
    return (
        <span className={`${props.iconName} ${props.size} text-pink-900`}></span>
    )
}

