'use client'
import { useState } from 'react';
import { Icon, Text, Title } from '../atoms'
import { Card, ItemText } from '../molecules'
import { PopUp } from '../molecules/Popup';
import { Carousel } from 'primereact/carousel';


export default function Portfolio() {

  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const cards = [
    {
      title: 'VetApp Frontend',
      text: 'Web application designed to facilitate communication and coordination between farmers and veterinarians in the Antioquia region.',
      iconName: 'icon-[material-symbols--pet-supplies]',
      size: 'text-8xl',
      link: 'https://github.com/Eliana-Janneth/vetapp-frontend'
    },
    {
      title: 'Coffee Page',
      text: 'Simple page of a coffee shop where it classifies the coffees by the most popular and top coffees.',
      iconName: 'icon-[material-symbols--coffee]',
      size: 'text-8xl',
      link: 'https://github.com/Eliana-Janneth/simple-coffee-listing'
    },
    {
      title: 'Portfolio',
      text: 'Personal portfolio where I show my most important projects and my contact information.',
      iconName: "icon-[material-symbols--person-book]",
      size: 'text-8xl',
      link: 'https://eliana-puerta-portfolio.vercel.app'
    }
  ];
  const responsiveOptions = [
    {
      breakpoint: '1700px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '200px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  interface CardData {
    title: string;
    text: string;
    iconName: string;
    size: string;
    link: string;
  }

  const renderCard = (card: CardData) => {
    return (
      <div className='p-2 lg:w-full'>
        <Card
          title={card.title}
          text={card.text}
          iconName={card.iconName}
          size={card.size}
          link={card.link}
        />
      </div>


    );
  };

  return (

    <main className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-2 p-2">
        <Title size="text-4xl">Portfolio</Title>
        <Text classText="w-1/2 text-center text-black">
          My most important projects are:
        </Text>
      </div>

      <div className='lg:w-full w-screen mx-0.5 lg:m-0'>
        <Carousel
          value={cards}
          autoplayInterval={3000}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={renderCard}
          className="custom-carousel"
          circular
        />
      </div>

    </main >
  )
}
