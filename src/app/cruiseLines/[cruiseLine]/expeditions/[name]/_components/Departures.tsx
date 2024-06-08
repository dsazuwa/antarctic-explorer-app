'use client';

import { format, isSameMonth, isSameYear } from 'date-fns';
import { useEffect } from 'react';

import HeaderSummary from '@/components/HeaderSummary';
import LinkButton from '@/components/LinkButton';
import Pagination from '@/components/Pagination';
import PerPageSelector from '@/components/PerPageSelector';
import SortSelect from '@/components/SortSelect';
import {
  departureSortOptions,
  departuresPerPageOptions,
} from '@/lib/constants';
import { TDeparture } from '@/lib/type';
import { cn, formatPrice } from '@/lib/utils';
import { useDeparturesStore } from '@/store/departures';
import InfoDisplay from './InfoDisplay';

type Props = { cruiseLine: string; name: string };

export default function Departures({ cruiseLine, name }: Props) {
  const { data, currentPage, selectedSize, selectedSort, setDepartures } =
    useDeparturesStore();

  useEffect(() => {
    const { sort, dir } = departureSortOptions[selectedSort];

    const params = {
      page: currentPage,
      size: departuresPerPageOptions[selectedSize],
      sort,
      dir,
    };

    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/cruise-lines/${encodeURIComponent(cruiseLine)}/expeditions/${encodeURIComponent(name)}/departures`,
    );

    for (const [key, value] of Object.entries(params))
      url.searchParams.append(key, String(value));

    fetch(url.toString())
      .then((response) => response.json())
      .then((data) => setDepartures(data));
  }, [cruiseLine, name, currentPage, selectedSize, selectedSort]);

  return data.length === 0 ? (
    <></>
  ) : (
    <section className='w-full' aria-label='Departure Date & Rates'>
      <div className='mx-auto flex max-w-screen-lg flex-col gap-4 px-4 py-8 md:py-12'>
        <h2 className='heading-3 font-bold text-sky-900'>Departures</h2>

        <Header />

        <ol className='space-y-4'>
          {data.map((departure, i) => (
            <Departure key={`departure-${i}`} departure={departure} />
          ))}
        </ol>

        <Controls />
      </div>
    </section>
  );
}

function Header() {
  const { currentPage, totalItems, selectedSort, selectedSize, setSort } =
    useDeparturesStore();

  return (
    <div className='inline-flex w-full flex-wrap items-center justify-between'>
      <HeaderSummary
        itemType='departures'
        currentPage={currentPage}
        itemsPerPage={departuresPerPageOptions[selectedSize]}
        totalItems={totalItems}
      />

      <SortSelect
        sortOptions={departureSortOptions}
        selectedSort={selectedSort}
        setSortOption={setSort}
      />
    </div>
  );
}

function Controls() {
  const {
    currentPage,
    selectedSize,
    totalPages,
    setSize,
    navigateToFirst,
    navigateToPrevious,
    navigateToNext,
    navigateToLast,
  } = useDeparturesStore();

  return (
    <div className='flex flex-col-reverse items-center text-xs sm:grid sm:grid-cols-3'>
      <PerPageSelector
        options={departuresPerPageOptions}
        itemsPerPage={selectedSize}
        setItemsPerPage={setSize}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        navigateToFirst={navigateToFirst}
        navigateToPrevious={navigateToPrevious}
        navigateToNext={navigateToNext}
        navigateToLast={navigateToLast}
      />
    </div>
  );
}

function Departure({ departure }: { departure: TDeparture }) {
  const {
    name,
    itinerary,
    vessel,
    departingFrom,
    arrivingAt,
    duration,
    startDate,
    endDate,
    startingPrice,
    discountedPrice,
    website,
  } = departure;

  const isDiscounted = discountedPrice !== null;

  const formatDateRange = () => {
    if (isSameYear(startDate, endDate))
      return isSameMonth(startDate, endDate)
        ? `${format(startDate, 'MMM d')} - ${format(endDate, 'd, yyyy')}`
        : `${format(startDate, 'MMM d')} - ${format(endDate, 'MMM d, yyyy')}`;
    else
      return `${format(startDate, 'MMM d, yyyy')} - ${format(endDate, 'MMM d, yyyy')}`;
  };

  return (
    <li className='flex flex-col gap-4 rounded-r-sm border border-l-amber-400 bg-white p-4 shadow-sm sm:flex-row sm:space-y-0'>
      <div className='flex flex-col justify-center gap-3 sm:w-9/12'>
        <div className='font-bold'>
          {itinerary}
          {name !== null && (
            <span className='body-sm ml-1 font-normal'>{`(${name})`}</span>
          )}
        </div>

        <ul
          className='grid gap-6'
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(144px, 1fr))',
          }}
        >
          <InfoDisplay label='Departure Date' value={formatDateRange()} />

          <InfoDisplay label='Duration' value={duration + ' days'} />

          <InfoDisplay label='Origin Port' value={departingFrom} />

          <InfoDisplay label='Final Port' value={arrivingAt} />

          <InfoDisplay label='Ship' value={vessel} />
        </ul>
      </div>

      <div className='flex flex-col items-center justify-center gap-2 border-t sm:w-3/12 sm:border-l sm:border-t-0'>
        <div className='mt-4 text-xxs/[10px] font-semibold text-slate-400 sm:mt-0 sm:text-xs/[12px]'>
          Starting from
        </div>

        <div className='flex flex-col items-center'>
          <div
            className={cn({
              'text-xs line-through': isDiscounted,
              'body-sm font-bold': !isDiscounted,
            })}
          >
            {formatPrice(startingPrice)}
          </div>

          {isDiscounted && (
            <div className='body font-bold text-emerald-600'>
              {formatPrice(discountedPrice)}
            </div>
          )}
        </div>

        <LinkButton
          variant='secondary'
          label='Book Now'
          className='mt-1'
          website={website}
        />
      </div>
    </li>
  );
}