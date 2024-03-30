import { Title } from "../atoms";
import { ProgressBarWithText } from "../molecules";


export default function Languages() {
    return (
        <div className='flex flex-col w-[220px] h-min'>
            <Title>Languages</Title>
            <ProgressBarWithText title="Spanish" value={100}></ProgressBarWithText>
            <ProgressBarWithText title="English" value={80}></ProgressBarWithText>
            <ProgressBarWithText title="French" value={50}></ProgressBarWithText>
        </div>
    )
}