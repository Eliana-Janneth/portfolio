import { ItemText } from ".";
import { ProgressBar } from "../atoms";

type ProgressBarWithTextProps = {
    title: string;
    value: number;
}

export default function ProgressBarWithText({ title, value }: ProgressBarWithTextProps) {
    return (
        <div className='flex flex-col w-full '>
            <ItemText title={title} value={`${value}%`}></ItemText>
            <ProgressBar value={value}></ProgressBar>
        </div>
    )
}