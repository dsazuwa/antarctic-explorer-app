import { ValueNoneIcon } from '@radix-ui/react-icons';

import Expedition from '@/components/common/Expedition';
import { useExpeditionsStore } from '@/store/expeditions';

export default function ExpeditionsGrid() {
  const expeditions = useExpeditionsStore((state) => state.expeditions.data);

  return expeditions.length === 0 ? (
    <div className='flex w-full flex-col items-center justify-center gap-3 p-4 text-center font-semibold text-gray-300 sm:flex-row'>
      <ValueNoneIcon className='h-10 w-10' />

      <span className='max-w-64 lg:text-lg'>
        No results. Try adjusting your search by removing filters.
      </span>
    </div>
  ) : (
    <ol
      id='expeditions-list'
      className='flex w-full flex-col gap-6 sm:grid sm:grid-cols-2'
    >
      {expeditions.map((expedition, index) => (
        <Expedition
          key={'expedition' + index}
          expedition={expedition}
          isImgPriority={true}
        />
      ))}
    </ol>
  );
}
