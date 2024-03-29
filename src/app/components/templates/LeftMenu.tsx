import Image from 'next/image'
import { Languages, Skills, ExtraSkills, InfoBase } from '../organisms'
export default function LeftMenu() {
    return (
        <div className="w-[305px] bg-teal-100 flex flex-col items-center p-2">

            <div className="w-[150px] h-[242px] flex flex-col items-center">
                <Image src="/foto.jpg" width={150} height={150} alt="Logo" className="rounded-full" />
                <h1 className='text-lg font-semibold '>Eliana Puerta</h1>
                <p className='text-sm'>Fron-End Developer</p>
            </div>

            <InfoBase></InfoBase>
            <Languages></Languages>
            <Skills></Skills>
            <ExtraSkills></ExtraSkills>
        </div>
    )
}