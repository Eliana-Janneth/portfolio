import Image from 'next/image'
import { Languages, Skills, ExtraSkills, InfoBase, Frameworks } from '../organisms'
import { HorizontalLine } from '../atoms'
export default function SidebarLeft() {
    return (
        <div className="w-fit bg-white flex flex-col items-center p-8">

            <div className="w-[150px] h-[242px] flex flex-col items-center">
                <Image src="/foto.jpg" width={150} height={150} alt="Logo" className="rounded-full" />
                <h1 className='text-lg font-semibold '>Eliana Puerta</h1>
                <p className='text-sm'>Fron-End Developer</p>
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