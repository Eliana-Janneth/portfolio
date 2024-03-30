import { Title } from "../atoms";
import { ProgressBarWithText } from "../molecules";


export default function Frameworks() {
    return (
        <div className='flex flex-col w-full h-min'>
            <Title size="text-xl">Frameworks</Title>
            <ProgressBarWithText title="React" value={70}></ProgressBarWithText>
            <ProgressBarWithText title="Vue.js" value={90}></ProgressBarWithText>
            <ProgressBarWithText title="Express.js" value={50}></ProgressBarWithText>

        </div>
    )
}