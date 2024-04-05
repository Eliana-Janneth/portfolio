type IconProps = {
  iconName: string
  size?: string
}

export default function Icon({ iconName, size }: IconProps) {
  return <span className={`${iconName} ${size} color-secondary `}></span>
}
