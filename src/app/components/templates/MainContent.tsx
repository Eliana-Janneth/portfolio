import { Education, Footer, Knowledge, MainInfo, Portfolio } from "../organisms";

export default function MainContent() {
    return (
        <main className="flex-1 flex bg-pink-100 flex-col px-2 items-center justify-center w-fit gap-2">

            <MainInfo />
            <Knowledge />
            <Education />
            <Portfolio />
            <Footer />
        </main>
    )
}