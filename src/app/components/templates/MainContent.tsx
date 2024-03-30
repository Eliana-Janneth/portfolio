import Image from "next/image";
import { Education, Knowledge, MainInfo, Portfolio } from "../organisms";

export default function MainContent() {
    return (
        <main className="flex-1 flex bg-pink-50 flex-col p-2 items-center justify-center w-fit">

            <MainInfo/>
            <Knowledge />
            <Education />
            <Portfolio />
            
        </main>
    )
}