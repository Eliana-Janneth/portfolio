import { ItemText } from ".";
import { ProgressBar } from "../atoms";

type ProgressBarWithTextProps = {
    title: string;
    value: number;
}

export default function ProgressBarWithText(props: ProgressBarWithTextProps) {
    return (
        <div className='flex flex-col w-full '>
            <ItemText title={props.title} value={`${props.value}%`}></ItemText>
            <ProgressBar value={props.value}></ProgressBar>
        </div>
    )
}