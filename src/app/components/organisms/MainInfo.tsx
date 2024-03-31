"use client";
import Image from "next/image";
import { useState } from "react";
import { PopUp } from "../molecules/Popup";


export default function Education() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <>
            <main className="bg-white flex flex-col lg:flex-row p-4">
                <section className="flex flex-col justify-between gap-8 py-8 items-start">
                    <div className="gap-2">
                        <h1 className="text-5xl font-bold"> I&apos;m Eliana Puerta</h1>
                        <h1 className="font-bold text-5xl"><span className="text-pink-500 text-gradient">Front-end</span> Developer</h1>
                    </div>
                    <p>I&apos;m a passionate software developer, I enjoy creating web applications focused on the frontend and I am constantly exploring new technologies to improve my skills.</p>
                    <button className="rounded-lg font-semibold w-fit bg-pink-500 text-black py-2 px-6 text-xl flex items-center text-gradient-color" onClick={() => setOpen(o => !o)}>HIRE ME
                        <span className="icon-[mingcute--arrow-right-fill] pl-6"></span>
                    </button>
                    <PopUp open={open} closeModal={closeModal} >
                        <p className="text-justify text-base text-pink-50">
                            I&apos;m characterized by being a creative person, with a desire to excel and goals based on objectives;
                            I&apos;m a fast learner and I am interested in fulfilling my work properly, punctually and responsibly.<br />
                            I have the ability to work in a team, with a high degree of commitment and love for what I do, I like to be in constant learning, be disciplined and have excellent interpersonal relationships.</p>
                    </PopUp>

                </section>
                <Image src="/foto.jpg" width={500} height={150} alt="Logo" className="rounded-full" />
            </main>
        </>
    )
}

