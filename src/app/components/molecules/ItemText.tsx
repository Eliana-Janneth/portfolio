import { Icon, Text } from '../atoms'

type ItemTextProps = {
  title: string
  value?: number | string
  iconName?: string
  size?: string
  classText?: string
}

export default function ItemText({
  title,
  value,
  iconName,
  size,
  classText,
}: ItemTextProps) {
  return (
    <div
      className={`flex ${iconName ? 'items-center justify-start' : 'justify-between'} mt-2 w-full `}
    >
      {iconName && <Icon iconName={iconName} size="text-3xl"></Icon>}
      <Text classText={`${iconName && 'pl-4'}`}>{title}</Text>
      <Text classText={`font-medium ${classText}`}>{value}</Text>
    </div>
  )
}
