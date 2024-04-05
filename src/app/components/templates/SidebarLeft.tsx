import Image from 'next/image'
import {
  Languages,
  Skills,
  ExtraSkills,
  InfoBase,
  Frameworks,
} from '../organisms'
import { HorizontalLine } from '../atoms'
export default function SidebarLeft() {
  return (
    <div className="color-primary flex w-full flex-col items-center p-8 lg:w-fit">
      <div className="flex h-min flex-col items-center">
        <Image
          src="/photoLeft.jpg"
          width={170}
          height={150}
          alt="photo"
          className="rounded-full"
        />
        <h1 className="text-gradient text-lg font-bold   ">Eliana Puerta</h1>
        <p className="text-sm font-semibold">
          <i>Systems Engineering Student</i>
        </p>
      </div>

      <HorizontalLine />
      <InfoBase />
      <HorizontalLine />
      <Languages />
      <HorizontalLine />
      <Skills />
      <HorizontalLine />
      <Frameworks />
      <HorizontalLine />
      <ExtraSkills />
    </div>
  )
}
