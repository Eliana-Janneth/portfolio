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
        <main className="bg-white flex w-full p-10">
            <section className="flex flex-col items-center w-4/12 ">
                <Title>{props.title}</Title>
                <div className='flex justify-between items-center my-4 gap-10'>
                    <Text>{props.text}</Text>
                    <span className="bg-teal-500 w-fit text-white px-2">{props.initialDate} - {props.finalDate}</span>
                </div>
            </section>
            <section className="flex flex-col flex-1 items-center gap-4" >
                <Title>{props.title}</Title>
                <Text >{props.description}</Text>
            </section>
        </main>
    )
}

