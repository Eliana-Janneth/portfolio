import Image from 'next/image'
import { Languages, Skills, ExtraSkills, InfoBase, Frameworks } from '../organisms'
import { HorizontalLine } from '../atoms'
export default function SidebarLeft() {
    return (
        <div className="w-full lg:w-fit color-primary flex flex-col items-center p-8">

            <div className="h-min flex flex-col items-center">
                <Image src="/photoLeft.jpg" width={150} height={150} alt="Logo" className="rounded-full" />
                <h1 className='text-lg font-bold text-gradient   '>Eliana Puerta</h1>
                <p className='text-sm font-semibold'><i>Systems Engineering Student</i></p>
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
