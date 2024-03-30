import { SidebarLeft, MainContent, SidebarRight } from "./components/templates";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-3 justify-between bg-pink-50">

      <SidebarLeft />
      <MainContent />

      <SidebarRight />

    </main>
  );
}
