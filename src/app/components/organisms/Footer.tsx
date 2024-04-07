import { Icon } from '../atoms'

//función para crear el footer
export default function Footer() {
  return (
    <footer className="color-primary flex w-full flex-col items-center justify-center gap-1 py-4 text-center text-xs text-gray-700">
      <p>2024 All Rights Reserved</p>
      <div className="flex items-center gap-1">
        <Icon iconName="icon-[mdi--copyright]" />
        <p>Eliana Puerta</p>
      </div>
    </footer>
  )
}
