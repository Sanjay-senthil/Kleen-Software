import './date-picker-interval.scss';

import { ClassNameBem, IntervalDate } from '@kleeen/types';
import { useEffect, useState } from 'react';
import { useGetNavigationStyle, useTheme } from '@kleeen/react/hooks';

import { ButtonSubHeaderEnum } from '../SubHeader/component/ButtonHeader/ButtonSubHeader.enum';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { DateFilterButton } from './components/date-filter-button';
import { DateInterval } from '@kleeen/react/components';
import { DatePickerIntervalProps } from './date-picker-interval.model';
import { RelativeTimePicker } from './components/relative-time-picker';
import { StyledTooltip } from './date-picker-interval.styles';
import classnames from 'classnames';
import { isNil } from 'ramda';

const bem = ClassNameBem.DatePickerInterval;

export function DatePickerInterval({
  className,
  datePickerState,
  handleFilter,
  isOpen,
  isSetOpen,
}: DatePickerIntervalProps) {
  const { isNavLeft } = useGetNavigationStyle();
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [openCustomRange, setOpenCustomRange] = useState(false);
  const { themeClass } = useTheme();

  const isApply = !isNil(handleFilter);

  if (!isNil(isOpen) && isApply) {
    useEffect(() => {
      setOpen(isOpen);
    }, [isOpen]);
  }

  function handleClickFilterButton() {
    setOpen(!open);
  }

  function handleCloseDateFilter(e = null) {
    if (e?.path[0].classList.contains(ButtonSubHeaderEnum.elementButtonGenericHeader)) return;
    if (open) {
      if (isApply && isSetOpen) {
        isSetOpen(isNavLeft ? openCustomRange : isNavLeft);
      }
      setOpen(isNavLeft ? openCustomRange : isNavLeft);
      setTimeout(() => {
        setOpenCustomRange(false);
      }, 250);
    }
  }

  function handleOpenCustomRange() {
    setTimeout(() => {
      setOpenCustomRange(true);
    }, 250);
  }

  function setRelativeDate(intervalDate: IntervalDate) {
    datePickerState.setRelativeDate(intervalDate);
    datePickerState.setTo(undefined);
    datePickerState.setFrom(undefined);

    if (!isApply) {
      setTimeout(() => {
        handleCloseDateFilter();
      }, 250);
    }
  }

  return (
    <div className={classnames(bem, 'date-picker-interval-container')}>
      <ClickAwayListener onClickAway={handleCloseDateFilter}>
        <div className={classnames(`${bem}__tooltip`)}>
          <StyledTooltip
            disableFocusListener
            disableHoverListener
            disableTouchListener
            onClose={handleCloseDateFilter}
            open={open}
            PopperProps={{
              className: `${themeClass} ${className} tooltip-date-range-picker`,
            }}
            title={
              openCustomRange ? (
                <DateInterval
                  datePickerState={datePickerState}
                  handleFilter={handleFilter}
                  handleCloseDateFilter={handleCloseDateFilter}
                  setOpenCustomRange={setOpenCustomRange}
                />
              ) : (
                <RelativeTimePicker
                  datePickerState={datePickerState}
                  handleCloseDateFilter={handleCloseDateFilter}
                  handleFilter={handleFilter}
                  handleOpenCustomRange={handleOpenCustomRange}
                  setRelativeDate={setRelativeDate}
                />
              )
            }
          >
            <div className={classnames(`${bem}__container`)}>
              <DateFilterButton onClick={handleClickFilterButton} datePickerState={datePickerState} />
            </div>
          </StyledTooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
}
