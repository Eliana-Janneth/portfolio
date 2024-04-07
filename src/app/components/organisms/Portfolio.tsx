'use client'
import { useEffect, useState } from 'react'
import { Text, Title } from '../atoms'
import { Card } from '../molecules'
import { Carousel } from 'primereact/carousel'

export default function Portfolio() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const cards = [
    {
      title: 'VetApp Frontend',
      text: 'Web application designed to facilitate communication and coordination between farmers and veterinarians in the Antioquia region.',
      iconName: 'icon-[material-symbols--pet-supplies]',
      size: 'text-8xl',
      link: 'https://github.com/Eliana-Janneth/vetapp-frontend',
    },
    {
      title: 'Coffee Page',
      text: 'Simple page of a coffee shop where it classifies the coffees by the most popular and top coffees.',
      iconName: 'icon-[material-symbols--coffee]',
      size: 'text-8xl',
      link: 'https://github.com/Eliana-Janneth/simple-coffee-listing',
    },
    {
      title: 'Portfolio',
      text: 'Personal portfolio where I show my most important projects and my contact information.',
      iconName: 'icon-[material-symbols--person-book]',
      size: 'text-8xl',
      link: 'https://eliana-puerta-portfolio.vercel.app',
    },
  ]
  const responsiveOptions = [
    {
      breakpoint: '1700px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '200px',
      numVisible: 1,
      numScroll: 1,
    },
  ]
  interface CardData {
    title: string
    text: string
    iconName: string
    size: string
    link: string
  }

  const renderCard = (card: CardData) => {
    return (
      <div className="px-2">
        <Card
          title={card.title}
          text={card.text}
          iconName={card.iconName}
          size={card.size}
          link={card.link}
        />
      </div>
    )
  }

  return (
    <main className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-2 p-2">
        <Title size="text-4xl">Portfolio</Title>
        <Text classText="w-1/2 text-center text-black">
          My most important projects are:
        </Text>
      </div>

      <div className="mx-0.5 w-screen lg:m-0 lg:w-full">
        {isSmallScreen ? (
          <Carousel
            value={cards}
            autoplayInterval={3000}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={renderCard}
            className="custom-carousel"
            orientation="vertical"
            circular
          />
        ) : (
          <Carousel
            value={cards}
            autoplayInterval={3000}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={renderCard}
            className="custom-carousel"
            circular
          />
        )}
      </div>
    </main>
  )
}
