import { Icon, Text} from "../atoms";

type ItemTextProps = {
    title: string;
    value?: number | string;
    iconName?: string;
}

export default function ItemText(props: ItemTextProps) {
    return (
        <div className="flex justify-between w-full">
            {props.iconName && <Icon iconName={props.iconName}></Icon>}
            <Text value={props.title}></Text>
            <Text value={props.value}></Text>
        </div>
    )
}