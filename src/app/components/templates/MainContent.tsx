import { Education, Footer, Knowledge, MainInfo, Portfolio } from '../organisms'

//template que contiene los organismos MainInfo, Knowledge, Education, Portfolio y Footer
export default function MainContent() {
  return (
    <main className="color-background-primary flex w-fit lg:w-[60%] flex-1 flex-col items-center justify-center gap-2 px-2">
      <MainInfo />
      <Knowledge />
      <Education />
      <Portfolio />
      <Footer />
    </main>
  )
}
