import {LeftMenu,MainContent} from "./components/templates";

export default function Home() {
  return (
    <main className="flex min-h-screen text-gray-900 justify-between bg-teal-50">

      <LeftMenu />
        <MainContent />

      <div className="bg-orange-400">
        righ menu
      </div>

    </main>
  );
}
