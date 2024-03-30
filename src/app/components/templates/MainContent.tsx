import Image from "next/image";
import { Education, Knowledge, Portfolio } from "../organisms";

export default function MainContent() {
    return (
        <div className="flex-1 flex bg-teal-300 flex-col p-2 items-center justify-center w-[900px]">

            <div className="bg-red-300 flex flex-row p-4">

                <div className="flex flex-col justify-between items-start">
                    <h1> Eliana Puerta</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
                    <button>hire me</button>
                </div>
                <Image src="/foto.jpg" width={500} height={150} alt="Logo" className="rounded-full" />

            </div>

            <Knowledge />
            <Education />
            <Portfolio />
        </div>
    )
}