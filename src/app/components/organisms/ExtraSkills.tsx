import { Title } from "../atoms";
import { ItemText } from "../molecules";


export default function ExtraSkills() {
    return (
        <div className='flex flex-col w-full h-min '>
            <Title>Extra Skills</Title>

            <ItemText title="UML" iconName="icon-[raphael--diagram]" size="text-2xl"></ItemText>
            <ItemText title="GitHub" iconName="icon-[mingcute--github-fill]" size="text-2xl"></ItemText>
            <ItemText title="Git" iconName="icon-[mdi--git]" size="text-2xl"></ItemText>
            <ItemText title="Scrum" iconName="icon-[iconoir--agile]" size="text-2xl"></ItemText>
            <ItemText title="Leadership" iconName="icon-[mingcute--user-star-fill]" size="text-2xl"></ItemText>
            <ItemText title="Proactivity" iconName="icon-[raphael--jigsaw]" size="text-2xl"></ItemText>


        </div>
    )
}