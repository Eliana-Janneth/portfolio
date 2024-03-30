import { Title } from "../atoms";
import { ItemText } from "../molecules";


export default function InfoBase() {
    return (
        <div className='flex flex-col w-full h-min mt-10'>
            <ItemText title="Age" value="23"></ItemText>
            <ItemText title="Residence" value="CO"></ItemText>
            <ItemText title="Freelance" value="Available"></ItemText>
            <ItemText title="Address" value="Medellín, Colombia"></ItemText>
        </div>
    )
}