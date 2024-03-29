import { Icon, Text, Title } from "../atoms"

type CardProps = {
    iconName: string
    title: string
    text: string
}

export default function Card(props: CardProps) {
    return (
        <div className="bg-white flex flex-col items-center w-full">
            <Icon iconName={props.iconName}></Icon>
            <Title >{props.title}</Title>
            <Text>{props.text}</Text>
        </div>
    )
}

