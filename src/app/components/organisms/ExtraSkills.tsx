import { Title } from "../atoms";
import { ItemText } from "../molecules";


export default function ExtraSkills() {
    return (
        <div className='flex flex-col w-[220px] h-min mt-10'>
            <Title>Extra Skills</Title>
            <ItemText title="UML" iconName=""></ItemText>
            <ItemText title="GitHub" iconName="[iconoir--github]"></ItemText>
            <ItemText title="Git" iconName="[iconoir--git-compare]"></ItemText>
            <ItemText title="Scrum" iconName="[iconoir--agile]"></ItemText>


        </div>
    )
}