import LeftMenu from "./components/LeftMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen text-gray-900 justify-between bg-teal-50">

      <LeftMenu />
      <div className="bg-green-400">
        center
      </div>

      <div className="bg-orange-400">
        righ menu
      </div>

    </main>
  );
}
