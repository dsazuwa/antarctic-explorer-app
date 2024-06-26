'use client';

import { CalendarIcon } from '@radix-ui/react-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useMediaQuery } from '@/hooks/use-media-query';
import { getDateParam, updateDateParam } from '@/lib/param.utils';
import { cn, formatDate } from '@/lib/utils';
import { OptionHeader } from './option';

export default function DatePicker() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const startDate = getDateParam(searchParams.get('startDate'));
  const endDate = getDateParam(searchParams.get('endDate'));

  const handleSelectDate = (range?: DateRange) => {
    updateDateParam(router, searchParams, range?.from, range?.to);
  };

  return (
    <div className='border-b pb-5'>
      <OptionHeader className='mb-2.5'>Departure Dates</OptionHeader>

      <MobileDatePicker
        startDate={getDateParam(searchParams.get('startDate'))}
        endDate={endDate}
        handleSelectDate={handleSelectDate}
      />

      <FullDatePicker
        startDate={startDate}
        endDate={endDate}
        handleSelectDate={handleSelectDate}
      />
    </div>
  );
}

type PickerProps = {
  startDate: Date | null;
  endDate: Date | null;
  handleSelectDate: (range?: DateRange) => void;
};

function MobileDatePicker({
  startDate,
  endDate,
  handleSelectDate,
}: PickerProps) {
  const [isExpanded, setExpanded] = useState(false);
  const range = { from: startDate || undefined, to: endDate || undefined };

  return (
    <div className='lg:hidden'>
      <DateLabel
        startDate={startDate}
        endDate={endDate}
        handleClick={() => setExpanded((x) => !x)}
      />

      {isExpanded && (
        <Calendar
          initialFocus
          mode='range'
          defaultMonth={startDate || undefined}
          selected={range}
          onSelect={handleSelectDate}
          disabled={{ before: new Date() }}
          numberOfMonths={1}
          fixedWeeks
        />
      )}
    </div>
  );
}

function FullDatePicker({ startDate, endDate, handleSelectDate }: PickerProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    if (isMobile) setOpen(false);
  }, [isMobile]);

  const range = { from: startDate || undefined, to: endDate || undefined };

  return (
    <div className='hidden gap-2 lg:grid'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <PopoverAnchor>
            <DateLabel startDate={startDate} endDate={endDate} />
          </PopoverAnchor>
        </PopoverTrigger>

        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={startDate || undefined}
            selected={range}
            onSelect={handleSelectDate}
            disabled={{ before: new Date() }}
            numberOfMonths={2}
            fixedWeeks
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

type LabelProps = {
  startDate: Date | null;
  endDate: Date | null;
  handleClick?: () => void;
};

export function DateLabel({ startDate, endDate, handleClick }: LabelProps) {
  return (
    <Button
      variant='outline'
      className='w-full bg-inherit'
      onClick={handleClick}
    >
      <CalendarIcon className='mr-2 h-4 w-4' />

      <span
        className={cn(
          'lg:body-sm text-xs leading-4',
          !(startDate && endDate) && 'text-muted-foreground',
        )}
      >
        {startDate
          ? endDate
            ? `${formatDate(startDate, 'LLL dd, y')} - ${formatDate(endDate, 'LLL dd, y')}`
            : formatDate(startDate, 'LLL dd, y')
          : 'Pick a date'}
      </span>
    </Button>
  );
}
