type IconProps = {
  iconName: string
  size?: string
}

//función para crear un ícono
export default function Icon({ iconName, size }: IconProps) {
  return <span className={`${iconName} ${size} color-secondary `}></span>
}
