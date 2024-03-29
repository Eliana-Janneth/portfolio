import { Title } from "../atoms";
import { ItemText } from "../molecules";


export default function ExtraSkills() {
    return (
        <div className='flex flex-col w-[220px] h-min mt-10'>
            <Title>Extra Skills</Title>
            <ItemText title="UML" iconName="" size="text-2xl"></ItemText>
            <ItemText title="GitHub" iconName="icon-[iconoir--github]" size="text-2xl"></ItemText>
            <ItemText title="Git" iconName="icon-[iconoir--git-compare]" size="text-2xl"></ItemText>
            <ItemText title="Scrum" iconName="icon-[iconoir--agile]" size="text-2xl"></ItemText>


        </div>
    )
}