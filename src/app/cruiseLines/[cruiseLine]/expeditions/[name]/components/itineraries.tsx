'use client';

import { ChevronRightIcon, Cross1Icon, ImageIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import Image from '@/components/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useMediaQuery } from '@/hooks/use-media-query';
import { TItinerary } from '@/lib/type';
import { cn } from '@/lib/utils';
import InfoDisplay from './info-display';

type ItinerariesProps = { itineraries: TItinerary[] };

export default function Itineraries({ itineraries }: ItinerariesProps) {
  const [index, setIndex] = useState(0);

  return (
    <section className='w-full' aria-label='Itineraries'>
      <div className='mx-auto flex max-w-screen-lg flex-col gap-6 px-6 py-8 md:pb-12 md:pt-16'>
        <h2 className='heading-3 font-bold text-sky-900'>
          Available Itineraries
        </h2>

        <p className='body mb-4 pr-4 md:w-1/2'>
          Our portfolio of immersive itineraries allows you to choose where and
          how you&apos;d like to explore the Antarctic with the best expedition
          team available.
        </p>

        <div className='hidden md:grid md:grid-cols-4 md:gap-4'>
          <ul>
            {itineraries.map(({ name, startPort }, i) => (
              <Tab
                key={`itinerary_btn_${i}`}
                index={i}
                name={name}
                startPort={startPort}
                isSelected={i === index}
                isLastTab={i + 1 < itineraries.length}
                handleClick={() => setIndex(i)}
              />
            ))}
          </ul>

          <Itinerary itinerary={itineraries[index]} className='md:col-span-3' />
        </div>

        <div className='md:hidden'>
          <Dialog
            itineraries={itineraries}
            index={index}
            handleClick={(i: number) => setIndex(i)}
          />
        </div>
      </div>
    </section>
  );
}

type TabProps = {
  index: number;
  name: string;
  startPort: string;
  isSelected: boolean;
  isLastTab: boolean;
  handleClick: () => void;
};

function Tab({
  index,
  name,
  startPort,
  isSelected,
  isLastTab,
  handleClick,
}: TabProps) {
  return (
    <li
      key={`itinerary_btn_${index}`}
      className={cn({
        'border-b': isLastTab,
        'border-l-2 border-l-amber-400': isSelected,
      })}
    >
      <button
        onClick={handleClick}
        className='flex w-full flex-row items-center justify-between'
      >
        <span className='flex flex-col gap-1.5 py-4 pl-4 text-start'>
          <span className='body font-bold'>{name}</span>

          {startPort && (
            <span className='body-sm font-semibold'>
              <span className='mr-1 font-light'>FROM</span>
              {startPort}
            </span>
          )}
        </span>

        {isSelected && <ChevronRightIcon className='h-8 w-6 py-2' />}
      </button>
    </li>
  );
}

type ItineraryProps = {
  itinerary: TItinerary;
  className?: string;
  nameElementId?: string;
};

function Itinerary({ itinerary, className, nameElementId }: ItineraryProps) {
  const { id, name, startPort, endPort, duration, mapUrl, schedules } =
    itinerary;

  return (
    <article className={cn(className)}>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div className='space-y-4'>
          <h3 id={nameElementId} className='h-6 font-black text-sky-800'>
            {name}
          </h3>

          <ul className='grid grid-cols-3 gap-4 md:grid-cols-1'>
            <InfoDisplay label='Origin Port' value={startPort} />

            <InfoDisplay label='Final Port' value={endPort} />

            <InfoDisplay label='Duration' value={`${duration} days`} />
          </ul>
        </div>

        <Map alt={`${name} map`} url={mapUrl} />
      </div>

      <Accordion type='multiple'>
        {schedules.map(({ day, header, content }, i) => (
          <AccordionItem key={`itinerary_${id}_schedule_${i}`} value={day}>
            <AccordionTrigger className='group'>
              <div className='flex flex-col gap-1 text-start'>
                <span className='body-sm font-semibold text-gray-500'>
                  {day}
                </span>

                <span className='heading-6 flex-grow font-bold group-hover:underline'>
                  {header}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className='body space-y-6 pb-7 pt-3'>
              {content.map((paragraph, i) => (
                <p key={`p-${i}`}>{paragraph}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  );
}

function Map({ alt, url }: { url: string; alt: string }) {
  const hasMap = url !== null;

  return (
    <div
      className={cn(
        'aspect-[5/6] md:col-span-2 md:mt-[-35%] md:max-h-[580px]',
        { 'flex items-center justify-center rounded-sm bg-muted/80': !hasMap },
      )}
    >
      {hasMap ? (
        <Image
          className='object-cover'
          src={url}
          alt={alt}
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      ) : (
        <ImageIcon
          className='h-48 w-48 text-primary/20'
          aria-label='Map image unavailable'
        />
      )}
    </div>
  );
}

type DialogProps = {
  itineraries: TItinerary[];
  index: number;
  handleClick: (i: number) => void;
};

function Dialog({ itineraries, index, handleClick }: DialogProps) {
  const [open, setOpen] = useState(false);
  const isDialog = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!isDialog) setOpen(false);
  }, [isDialog]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <ul>
        {itineraries.map(({ name, startPort }, i) => (
          <Tab
            key={`itinerary_btn_${i}`}
            index={i}
            name={name}
            startPort={startPort}
            isSelected={i === index}
            isLastTab={i + 1 < itineraries.length}
            handleClick={() => {
              handleClick(i);
              setOpen(true);
            }}
          />
        ))}
      </ul>

      <SheetContent
        side='custom'
        className={cn(
          'flex max-h-screen w-screen flex-col overflow-y-scroll bg-white',
          {
            'inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right':
              !isDialog,
          },
        )}
      >
        {open && (
          <Content
            handleClose={() => setOpen(false)}
            itinerary={itineraries[index]}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}

type ContentProps = {
  itinerary: TItinerary;
  handleClose: () => void;
};

function Content({ itinerary, handleClose }: ContentProps) {
  const [ready, setReady] = useState(true);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const appBar = document.querySelector('#dialog-app-bar');
    const observedElement = document.querySelector('#scroll-anchor');

    if (appBar == null || observedElement == null) {
      setReady(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setScrolledPast(!entries[0].isIntersecting);
      },
      { threshold: 0, rootMargin: `-${appBar.clientHeight}px` },
    );

    observer.observe(observedElement);

    return () => {
      observer.disconnect();
    };
  }, [ready]);

  return (
    <>
      <div
        id='dialog-app-bar'
        className={cn(
          'fixed flex w-full flex-row items-center gap-2 bg-white p-4',
          { 'border-b-2 border-solid border-gray-100': scrolledPast },
        )}
      >
        <Button
          size='icon'
          variant='ghost'
          aria-label='close'
          onClick={handleClose}
        >
          <Cross1Icon className='h-4 w-4 text-black' />
        </Button>

        {scrolledPast && (
          <span className='body-sm mt-0.5 font-black text-sky-900'>
            {itinerary.name}
          </span>
        )}
      </div>

      <Itinerary
        className='mt-[72px] space-y-4 px-6 pb-6'
        itinerary={itinerary}
        nameElementId='scroll-anchor'
      />
    </>
  );
}
