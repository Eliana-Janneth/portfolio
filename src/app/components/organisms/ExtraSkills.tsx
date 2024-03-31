import { Title } from "../atoms";
import { ItemText } from "../molecules";


export default function ExtraSkills() {
    return (
        <div className='flex flex-col w-full h-min items-start '>
            <Title>Extra Skills</Title>

            <ItemText title="UML" iconName="icon-[raphael--diagram]"></ItemText>
            <ItemText title="GitHub" iconName="icon-[mingcute--github-fill]"></ItemText>
            <ItemText title="Git" iconName="icon-[mdi--git]"></ItemText>
            <ItemText title="Scrum" iconName="icon-[iconoir--agile]"></ItemText>
            <ItemText title="Leadership" iconName="icon-[mingcute--user-star-fill]"></ItemText>
            <ItemText title="Proactivity" iconName="icon-[raphael--jigsaw]"></ItemText>


        </div>
    )
}