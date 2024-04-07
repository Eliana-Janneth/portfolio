import { Title } from '../atoms'
import { ProgressBarWithText } from '../molecules'


//organismo que contiene los componentes moleculas Title y ProgressBarWithText para mostrar los lenguajes
export default function Skills() {
  return (
    <div className="flex h-min w-full flex-col whitespace-nowrap">
      <Title>Programming Languages</Title>
      <ProgressBarWithText title="JavaScript " value={80}></ProgressBarWithText>
      <ProgressBarWithText title="SQL" value={80}></ProgressBarWithText>
      <ProgressBarWithText title="Java" value={80}></ProgressBarWithText>
      <ProgressBarWithText title="Node.js " value={70}></ProgressBarWithText>
    </div>
  )
}
