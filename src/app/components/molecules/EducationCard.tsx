import { Icon, Text, Title } from '../atoms'

type EducationCardProps = {
  title: string
  text: string
  size?: string
  initialDate: string
  finalDate: string
  typeEducation: string
  description: string
}

export default function EducationCard({
  title,
  text,
  size,
  initialDate,
  finalDate,
  typeEducation,
  description,
}: EducationCardProps) {
  return (
    <main className="color-primary flex w-full flex-col p-10 lg:flex-row">
      <section className="flex w-full flex-col items-center lg:w-4/12 ">
        <Title>{title}</Title>
        <div className="my-4 flex items-center justify-between gap-10">
          <Text>{text}</Text>
          <span className="bg-[#F9CFC7] w-fit px-2 text-sm font-semibold text-gray-500 ">
            {initialDate} - {finalDate}
          </span>
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center gap-4">
        <Title>{typeEducation}</Title>
        <Text>{description}</Text>
      </section>
    </main>
  )
}
