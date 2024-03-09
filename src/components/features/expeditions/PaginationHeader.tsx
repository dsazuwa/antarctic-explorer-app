import HeaderSelect from '@/components/common/HeaderSelect';
import HeaderSummary from '@/components/common/HeaderSummary';
import { sortOptions } from '@/lib/constants';
import { setSortOption, useAppDispatch, useAppSelector } from '@/store';

export default function PaginationHeader() {
  const dispatch = useAppDispatch();
  const {
    expeditions: { currentPage, totalItems, itemsPerPage },
    selectedSort,
  } = useAppSelector((s) => s.expeditionState);

  return (
    <div className='flex h-10 items-center justify-between sm:text-xs'>
      <HeaderSummary
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        itemType='expeditions'
      />

      <HeaderSelect
        sortOptions={sortOptions}
        selectedSort={selectedSort}
        setSortOption={(i: number) => dispatch(setSortOption(i))}
      />
    </div>
  );
}
