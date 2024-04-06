import { Title } from '../atoms'

export default function SidebarRight() {
  return (
    <div className="color-primary sticky right-0 top-0 flex h-fit flex-row items-center justify-center gap-2 p-2 lg:h-screen lg:flex-col lg:justify-start ">
      <Title classTitle='hidden lg:block'>Links</Title>

      <a
        href="https://github.com/eliana-janneth/"
        className="text-gradient-color flex justify-center rounded-full bg-pink-900 p-2"
      >
        <span className="icon-[line-md--github-loop] text-2xl text-pink-50 hover:text-white"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/eliana-puerta/"
        className="text-gradient-color flex justify-center rounded-full bg-pink-900 p-2"
      >
        <span className="icon-[line-md--linkedin] text-2xl text-pink-50 hover:text-white"></span>
      </a>
      <a
        href="https://www.instagram.com/elianaj_puerta/"
        className="text-gradient-color flex justify-center rounded-full bg-pink-900 p-2"
      >
        <span className="icon-[line-md--instagram] text-2xl text-pink-50 hover:text-white"></span>
      </a>
    </div>
  )
}
