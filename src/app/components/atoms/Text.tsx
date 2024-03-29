
type TextProps = {
    value: string | number | undefined;
}


export default function Text(props: TextProps) {
    return (
        <p className="font-roboto text-base text-gray-700 ">{props.value}</p>
    )
}


