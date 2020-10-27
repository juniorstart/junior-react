import React from 'react';
import dayjs from 'dayjs';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { ChevronLeft, ChevronRight } from '../Icons';

const Calendar: React.FC<ReactDatePickerProps> = ({ selected, onChange, ...props }) => {
  return (
    <DatePicker
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="flex justify-between p-4">
          <div className="flex">
            <div className="font-medium">{dayjs(date).format('MMMM')}</div>
            <div className="ml-1 font-normal">{dayjs(date).format('YYYY')}</div>
          </div>
          <div className="w-12 flex justify-between">
            <button
              className="text-gray-500 hover:text-primary-500"
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <ChevronLeft className="w-4 " />
            </button>
            <button
              className="text-gray-500 hover:text-primary-500"
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <ChevronRight className="w-4" />
            </button>
          </div>
        </div>
      )}
      selected={selected}
      onChange={onChange}
      {...props}
    />
  );
};

export default Calendar;
