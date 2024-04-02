import { Title } from "../atoms";
import { ProgressBarWithText } from "../molecules";


export default function Skills() {
    return (
        <div className='flex flex-col w-full h-min'>
            <Title >Programming Languages</Title>
            <ProgressBarWithText title="JavaScript " value={80}></ProgressBarWithText>
            <ProgressBarWithText title="SQL" value={80}></ProgressBarWithText>
            <ProgressBarWithText title="Java" value={80}></ProgressBarWithText>
            <ProgressBarWithText title="Node.js " value={70}></ProgressBarWithText>

        </div>
    )
}