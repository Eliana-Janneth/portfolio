import { Icon, Text, Title } from '../atoms'

type CardProps = {
  iconName: string
  title: string
  text: string
  size?: string
  link?: string
}

export default function Card({ iconName, title, text, size, link }: CardProps) {
  return (
    <div className="color-primary hover:color-background-primary flex w-full flex-col items-center gap-2 p-4 drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95 hover:drop-shadow-2xl">
      <Icon iconName={iconName} size={size}></Icon>
      <Title>{title}</Title>
      <Text>{text}</Text>

      {link && (
        <a
          href={link}
          className="text-sm font-bold text-pink-900 hover:text-pink-500"
        >
          <u>See more</u>
        </a>
      )}
    </div>
  )
}
