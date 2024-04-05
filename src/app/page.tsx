import { SidebarLeft, MainContent, SidebarRight } from "./components/templates";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-3 justify-between color-background-primary lg:flex-row">

      <SidebarLeft />
      <MainContent />
      <SidebarRight />

    </main>
  );
}
