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

export default function EducationCard(props: EducationCardProps) {
    return (
        <main className="color-primary flex flex-col w-full p-10 lg:flex-row">
            <section className="flex flex-col items-center w-full lg:w-4/12 ">
                <Title>{props.title}</Title>
                <div className='flex justify-between items-center my-4 gap-10'>
                    <Text>{props.text}</Text>
                    <span className="bg-pink-500 w-fit text-white px-2 text-sm hover:bg-pink-900">{props.initialDate} - {props.finalDate}</span>
                </div>
            </section>
            <section className="flex flex-col flex-1 items-center gap-4" >
                <Title>{props.typeEducation}</Title>
                <Text >{props.description}</Text>
            </section>
        </main>
    )
}

