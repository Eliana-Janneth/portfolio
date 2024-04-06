import { Title } from '../atoms'
import { ProgressBarWithText } from '../molecules'

export default function Languages() {
  return (
    <div className="flex h-min w-full flex-col">
      <Title>Languages</Title>
      <ProgressBarWithText title="English" value={80}></ProgressBarWithText>
      <ProgressBarWithText title="French" value={50}></ProgressBarWithText>
    </div>
  )
}
