import { ValueNoneIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import Expedition from '@/components/common/Expedition';
import Loader from '@/components/common/Loader';
import { getExpeditionParams } from '@/lib/utils';
import { useAppSelector, useLazyGetExpeditionsQuery } from '@/store';

export default function Expeditions() {
  const {
    expeditions: { data, currentPage },
    cruiseLines,
    selectedItemsPerPage,
    selectedSort,
    filters,
  } = useAppSelector((s) => s.expeditionState);

  const [fetchExpeditions, { isLoading, isFetching }] =
    useLazyGetExpeditionsQuery();

  const [isFirstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setFirstLoad(false);
      return;
    }

    const {
      startDate,
      endDate,
      capacity,
      duration,
      cruiseLines: cruiseLinesFilter,
    } = filters;

    fetchExpeditions(
      getExpeditionParams(
        currentPage,
        selectedItemsPerPage,
        selectedSort,
        cruiseLinesFilter.map((x) => cruiseLines[x]).join(','),
        startDate,
        endDate,
        capacity,
        duration,
      ),
    );
  }, [
    currentPage,
    selectedItemsPerPage,
    selectedSort,
    filters,
    cruiseLines,
    fetchExpeditions,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedItemsPerPage]);

  return (
    <>
      {data.length === 0 ? (
        <div className='flex w-full flex-col items-center justify-center gap-3 p-4 text-center font-semibold text-gray-300 sm:flex-row'>
          <ValueNoneIcon className='h-10 w-10' />

          <span className='max-w-64 lg:text-lg'>
            No results. Try adjusting your search by removing filters.
          </span>
        </div>
      ) : (
        <ol
          id='expeditions-list'
          className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'
        >
          {data.map((expedition, index) => (
            <Expedition key={'expedition' + index} expedition={expedition} />
          ))}
        </ol>
      )}

      {(isLoading || isFetching) && (
        <div className='fixed bottom-0 left-0 right-0 top-0 z-50 flex bg-[hsla(0,0%,100%,0.5)]'>
          <Loader className='my-auto' />
        </div>
      )}
    </>
  );
}
