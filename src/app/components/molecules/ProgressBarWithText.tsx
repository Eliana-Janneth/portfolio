import { ItemText } from '.'
import { ProgressBar } from '../atoms'

type ProgressBarWithTextProps = {
  title: string
  value: number
}

//función para crear una barra de progreso con texto
export default function ProgressBarWithText({
  title,
  value,
}: ProgressBarWithTextProps) {
  return (
    <div className="flex w-full flex-col ">
      <ItemText title={title} value={`${value}%`}></ItemText>
      <ProgressBar value={value}></ProgressBar>
    </div>
  )
}
