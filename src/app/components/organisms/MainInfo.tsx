'use client'
import Image from 'next/image'
import { useState } from 'react'
import { PopUp } from '../molecules/Popup'
import Confetti from 'react-confetti'

export default function MainInfo() {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClick = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
    }, 3500)
  }

  const contactMeOnClick = () => {
    window.open('mailto:janneth.0069@gmail.com', '_blank')
  }
  return (
    <>
      <main className="color-primary flex flex-col p-4 lg:flex-row">
        <section className="flex flex-col items-start justify-between gap-8 py-8">
          <div className="gap-2">
            <h1 className="text-5xl font-bold"> I&apos;m Eliana Puerta</h1>
            <h1 className="text-5xl font-bold">
              <span className="text-gradient text-pink-500">Front-end</span>{' '}
              Developer
            </h1>
          </div>
          <p>
            I&apos;m a passionate software developer, I enjoy creating web
            applications focused on the frontend and I&apos;m constantly
            exploring new technologies to improve my skills.
          </p>
          <button
            className="text-gradient-color flex w-fit items-center rounded-lg bg-pink-400 px-6 py-2 text-xl font-semibold text-black"
            // onClick={() => {
            //     setOpen(o => !o);
            //     handleClick();
            // }}
            onClick={contactMeOnClick}
          >
            HIRE ME
            <span className="icon-[mingcute--arrow-right-fill] pl-6"></span>
          </button>
          {showConfetti && <Confetti />}

          <PopUp open={open} closeModal={closeModal}>
            <p className="text-justify text-base text-pink-50">
              I&apos;m characterized by being a creative person, with a desire
              to excel and goals based on objectives; I&apos;m a fast learner
              and I am interested in fulfilling my work properly, punctually and
              responsibly.
              <br />I have the ability to work in a team, with a high degree of
              commitment and love for what I do, I like to be in constant
              learning, be disciplined and have excellent interpersonal
              relationships.
            </p>
          </PopUp>
        </section>
        <Image src="/photoMain.png" width={300} height={150} alt="Photo" />
      </main>
    </>
  )
}
