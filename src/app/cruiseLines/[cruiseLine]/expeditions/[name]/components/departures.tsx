'use client';

/* eslint-disable  @typescript-eslint/no-explicit-any */

import { format, isSameMonth, isSameYear } from 'date-fns';
import { useEffect } from 'react';
import useSWRImmutable from 'swr/immutable';

import HeaderSummary from '@/components/header-summary';
import LinkButton from '@/components/link-btn';
import Loader from '@/components/loader';
import Pagination from '@/components/pagination';
import SizeSelector from '@/components/size-selector';
import SortSelector from '@/components/sort-selector';
import useDepartures from '@/hooks/use-departures';
import { departureSortOptions, departuresSizeOptions } from '@/lib/constants';
import { DeparturesResponse, TDeparture } from '@/lib/type';
import { cn, formatPrice } from '@/lib/utils';
import InfoDisplay from './info-display';

type Props = { cruiseLine: string; name: string };

export default function Departures({ cruiseLine, name }: Props) {
  const {
    departures,
    page,
    size,
    totalItems,
    totalPages,
    selectedSort,
    setDepartures,
    setSort,
    setSize,
    navigateTo,
    navigateToPrevious,
    navigateToNext,
  } = useDepartures();

  const { sort, order } = departureSortOptions[selectedSort];
  const params = { page, size, sort, order };

  const searchParams: Record<string, any> = new URLSearchParams();
  for (const [key, value] of Object.entries(params))
    searchParams.append(key, String(value));

  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, isLoading } = useSWRImmutable<DeparturesResponse>(
    `/api/cruiseLines/${encodeURIComponent(cruiseLine)}/expeditions/${encodeURIComponent(name)}/departures/?${searchParams.toString()}`,
    fetcher,
  );

  useEffect(() => {
    if (data) setDepartures(data);
  }, [data]);

  if (departures.length === 0) return <></>;

  return (
    <section className='w-full' aria-label='Departure Date & Rates'>
      <div className='mx-auto flex max-w-screen-lg flex-col gap-6 px-6 py-8 md:py-12'>
        <h2 className='heading-3 font-bold text-sky-900'>Departures</h2>

        <div className='relative flex flex-col gap-6'>
          <div className='inline-flex w-full flex-wrap items-center justify-between gap-4'>
            <HeaderSummary
              itemType='departures'
              page={page}
              size={size}
              totalItems={totalItems}
            />

            {totalItems > 2 && (
              <SortSelector
                sortOptions={departureSortOptions}
                selectedSort={selectedSort}
                setSortOption={setSort}
              />
            )}
          </div>

          <ol className='space-y-4'>
            {departures.map((departure, i) => (
              <Departure key={`departure-${i}`} departure={departure} />
            ))}
          </ol>

          <div className='flex flex-col-reverse items-center justify-between gap-4 md:flex-row'>
            {totalItems <= departuresSizeOptions[0] ? (
              <div />
            ) : (
              <SizeSelector
                options={departuresSizeOptions}
                size={size}
                setSize={setSize}
              />
            )}

            <Pagination
              page={page}
              totalPages={totalPages}
              navigateTo={navigateTo}
              navigateToPrevious={navigateToPrevious}
              navigateToNext={navigateToNext}
            />
          </div>

          {isLoading && (
            <div className='absolute bottom-0 left-0 right-0 top-0 z-50 flex bg-[hsla(0,0%,100%,0.5)]'>
              <Loader className='my-auto' />
            </div>
          )}
        </div>
      </div>
    </section>
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
    <li className='flex flex-col rounded-r-sm border border-l-amber-400 bg-white p-6 shadow-sm max-sm:gap-6 sm:flex-row sm:space-y-0'>
      <div className='flex flex-1 flex-col justify-center gap-3'>
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

      <div className='flex shrink-0 flex-col items-center justify-center gap-2 border-t max-sm:pt-6 sm:border-l sm:border-t-0 sm:pl-6'>
        <div className='text-xxs font-normal sm:mt-0 sm:text-xs'>
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
            <div className='body font-bold text-emerald-700'>
              {formatPrice(discountedPrice)}
            </div>
          )}
        </div>

        <LinkButton
          variant='secondary'
          label='Book Now'
          className='mt-1'
          website={website}
          aria-label={`Go to external booking page`}
        />
      </div>
    </li>
  );
}
