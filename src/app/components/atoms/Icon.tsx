type IconProps = {
    iconName: string
}

export default function Icon(props: IconProps) {
    return (
        <span className={`${props.iconName} text-teal-700 text-2xl`}></span>
    )
}

