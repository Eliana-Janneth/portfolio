type ProgressBarProps = {
  value: number
}

//función para crear una barra de progreso
export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border  border-pink-300 p-0.5 hover:border-pink-400 ">
      <div
        className="color-secondary h-2 rounded-lg "
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
}
