import { Title } from "../atoms";
import { ProgressBarWithText } from "../molecules";


export default function Skills() {
    return (
        <div className='flex flex-col w-[220px] h-min'>
            <Title>Programming Languages</Title>
            <ProgressBarWithText title="JavaScript " value={80}></ProgressBarWithText>
            <ProgressBarWithText title="SQL" value={90}></ProgressBarWithText>
            <ProgressBarWithText title="Java" value={80}></ProgressBarWithText>
            <ProgressBarWithText title="Python" value={60}></ProgressBarWithText>

        </div>
    )
}