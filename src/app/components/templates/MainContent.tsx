import { Education, Footer, Knowledge, MainInfo, Portfolio } from '../organisms'

export default function MainContent() {
  return (
    <main className="color-background-primary flex w-fit flex-1 flex-col items-center justify-center gap-2 px-2">
      <MainInfo />
      <Knowledge />
      <Education />
      <Portfolio />
      <Footer />
    </main>
  )
}
