import { Title } from "../atoms";
import { ProgressBarWithText } from "../molecules";


export default function Skills() {
    return (
        <div className='flex flex-col w-[220px] h-min'>
            <Title>Programming Languages</Title>
            <ProgressBarWithText title="JavaScript" value={80}></ProgressBarWithText>
            <ProgressBarWithText title="React" value={70}></ProgressBarWithText>
            <ProgressBarWithText title="Vue" value={90}></ProgressBarWithText>
            <ProgressBarWithText title="Tailwind" value={80}></ProgressBarWithText>
            <ProgressBarWithText title="Next" value={70}></ProgressBarWithText>
            <ProgressBarWithText title="Java" value={80}></ProgressBarWithText>
        </div>
    )
}