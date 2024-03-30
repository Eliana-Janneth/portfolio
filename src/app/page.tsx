import {SidebarLeft,MainContent, SidebarRight} from "./components/templates";

export default function Home() {
  return (
    <main className="flex min-h-screen text-gray-900 justify-between bg-teal-50">

      <SidebarLeft />
        <MainContent />

      <SidebarRight/>

    </main>
  );
}
