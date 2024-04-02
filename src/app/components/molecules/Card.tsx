import { Icon, Text, Title } from "../atoms"

type CardProps = {
    iconName: string
    title: string
    text: string
    size?: string
    link?: string
}

export default function Card(props: CardProps) {
    return (
        <div className="color-primary flex flex-col items-center w-full p-4 gap-2 drop-shadow-xl hover:drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:color-secondary duration-300">
            <Icon iconName={props.iconName} size={props.size}></Icon>
            <Title >{props.title}</Title>
            <Text>{props.text}</Text>

            {props.link && <a href={props.link} className="text-pink-900 hover:text-pink-500 font-bold text-sm">
                <u>See more</u>
            </a>}

        </div>
    )
}

