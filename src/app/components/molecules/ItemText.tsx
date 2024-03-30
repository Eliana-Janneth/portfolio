import { Icon, Text } from "../atoms";

type ItemTextProps = {
    title: string;
    value?: number | string;
    iconName?: string;
    size?: string;
    classText?: string;
}

export default function ItemText(props: ItemTextProps) {
    return (
        <div className={`flex ${props.iconName ? 'justify-start' : 'justify-between'} w-full mt-2`}>
            {props.iconName && <Icon iconName={props.iconName} size="text-3xl"></Icon>}
            <Text classText={`${props.iconName && 'pl-4'}`}>{props.title}</Text>
            <Text>{props.value}</Text>
        </div>
    )
}