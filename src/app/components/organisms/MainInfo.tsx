import Image from "next/image";


export default function Education() {
    return (
        <main className="bg-white flex flex-row p-4">

            <section className="flex flex-col justify-between gap-8 py-8 items-start">
                <div className="gap-2">
                    <h1 className="text-5xl font-bold"> I&apos;m Eliana Puerta</h1>
                    <h1 className="font-bold text-5xl"><span className="text-pink-500">Front-end</span> Developer</h1>
                </div>
                <p>I&apos;m a passionate software developer, I enjoy creating web applications focused on the frontend and I am constantly exploring new technologies to improve my skills.</p>
                <button className="font-semibold w-fit bg-pink-500 text-black py-2 px-6 text-xl flex items-center ">HIRE ME
                    <span className="icon-[mingcute--arrow-right-fill] pl-6"></span>
                </button>
            </section>
            <Image src="/foto.jpg" width={500} height={150} alt="Logo" className="rounded-full" />
        </main>
    )
}

