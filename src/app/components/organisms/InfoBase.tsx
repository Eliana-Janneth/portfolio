import { ItemText } from '../molecules'

export default function InfoBase() {
  return (
    <div className="flex h-min w-full flex-col">
      <ItemText title="Age" value="23" classText="text-green-600"></ItemText>
      <ItemText title="Residence" value="CO"></ItemText>
      <ItemText
        title="Freelance"
        value="No Available"
        classText="text-red-600"
      ></ItemText>
      <ItemText title="Address" value="Medellín, Colombia"></ItemText>
    </div>
  )
}
