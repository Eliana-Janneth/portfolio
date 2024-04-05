import { Icon, Text, Title } from "../atoms"

type EducationCardProps = {
    title: string
    text: string
    size?: string
    initialDate: string
    finalDate: string
    typeEducation: string
    description: string
}

export default function EducationCard({ title, text, size, initialDate, finalDate, typeEducation, description }: EducationCardProps) {
    return (
        <main className="color-primary flex flex-col w-full p-10 lg:flex-row">
            <section className="flex flex-col items-center w-full lg:w-4/12 ">
                <Title>{title}</Title>
                <div className='flex justify-between items-center my-4 gap-10'>
                    <Text>{text}</Text>
                    <span className="color-secondary w-fit text-gray-500 font-semibold px-2 text-sm ">{initialDate} - {finalDate}</span>
                </div>
            </section>
            <section className="flex flex-col flex-1 items-center gap-4" >
                <Title>{typeEducation}</Title>
                <Text >{description}</Text>
            </section>
        </main>
    )
}

