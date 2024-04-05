import { Text, Title } from '../atoms'
import { Card } from '../molecules'

export default function Portfolio() {
  return (
    <main className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-2 p-2">
        <Title size="text-4xl">Portfolio</Title>
        <Text classText="w-1/2 text-center text-black">
          My most important projects are:
        </Text>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card
          title="VetApp Frontend"
          text="Web application designed to facilitate communication and coordination between farmers and veterinarians in the Antioquia region."
          iconName="icon-[material-symbols--pet-supplies]"
          size="text-8xl"
          link="https://github.com/Eliana-Janneth/vetapp-frontend"
        ></Card>
        <Card
          title="Coffee Page"
          text="Simple page of a coffee shop where it classifies the coffees by the most popular and top coffees."
          iconName="icon-[material-symbols--coffee]"
          size="text-8xl"
          link="https://github.com/Eliana-Janneth/simple-coffee-listing"
        ></Card>
      </div>
    </main>
  )
}
