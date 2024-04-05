import { SidebarLeft, MainContent, SidebarRight } from './components/templates'

export default function Home() {
  return (
    <main className="color-background-primary flex min-h-screen flex-col justify-between gap-3 lg:flex-row">
      <SidebarLeft />
      <MainContent />
      <SidebarRight />
    </main>
  )
}
