import { ItemText } from '../molecules'


//organismo que contiene los componentes moleculas ItemText para mostrar la información base
export default function InfoBase() {
  return (
    <div className="flex h-min w-full flex-col">
      <ItemText title="Age" value="23" classText="text-green-600 whitespace-nowrap"></ItemText>
      <ItemText title="Residence" value="CO"></ItemText>
      <ItemText
        title="Freelance"
        value="No Available"
        classText="text-red-600 whitespace-nowrap"
      ></ItemText>
      <ItemText title="Address" value="Medellín, Colombia" classText='whitespace-nowrap'></ItemText>
    </div>
  )
}
