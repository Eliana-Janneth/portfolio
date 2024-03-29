import { Icon, Text, Title } from "../atoms"

type CardProps = {
    iconName: string
    title: string
    text: string
    size?: string
}

export default function Card(props: CardProps) {
    return (
        <div className="bg-white flex flex-col items-center w-full p-4">
            <Icon iconName={props.iconName} size={props.size}></Icon>
            <Title >{props.title}</Title>
            <Text>{props.text}</Text>
        </div>
    )
}

