import { SidebarLeft, MainContent, SidebarRight } from "./components/templates";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-3 justify-between bg-pink-50 lg:flex-row">

      <SidebarLeft />
      <MainContent />

      <SidebarRight />

    </main>
  );
}
