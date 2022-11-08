import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { DateFilterButtonProps } from './date-filter-button.model';
import Grid from '@material-ui/core/Grid';
import { INTERVAL_DATES } from '@kleeen/types';
import { KUIConnect } from '@kleeen/core-react';
import React from 'react';
import { StyledButton } from './date-filter-button.style';
import TodayIcon from '@material-ui/icons/Today';

export function DateFilterButtonComponent({ datePickerState, onClick, translate }: DateFilterButtonProps) {
  const { from, relativeDate, to } = datePickerState;

  const intervalDateKey = INTERVAL_DATES.find(({ value }) => relativeDate === value)?.key;

  return (
    <StyledButton
      onClick={() => {
        onClick();
      }}
    >
      <Grid container>
        <Grid container alignItems="center" className="calendar-icon-container">
          <TodayIcon />
        </Grid>
        <Grid container alignItems="center" className="dates-container">
          {relativeDate ? (
            <div>
              <div>
                <span className="on-surface-color">
                  {translate(`app.dateInterval.interval.${intervalDateKey}`)}
                </span>
              </div>
            </div>
          ) : (
            <>
              {from && (
                <div className={to ? 'date-from' : ''}>
                  <span className="on-surface-color">From</span>
                  {` ${from?.format('MM/DD/YYYY')} `}
                  <span className="on-surface-color">at</span>
                  {` ${from?.format('HH:mm')}`}
                </div>
              )}
              {to && (
                <div>
                  <span className="on-surface-color">To</span>
                  {` ${to?.format('MM/DD/YYYY')} `}
                  <span className="on-surface-color">at</span>
                  {` ${to?.format('HH:mm')}`}
                </div>
              )}
              {!from && !to && <div className="placeholder">Pick a date...</div>}
            </>
          )}
        </Grid>
        <Grid container alignItems="center" className="arrow-container">
          <ArrowDropDownIcon />
        </Grid>
      </Grid>
    </StyledButton>
  );
}

export const DateFilterButton = React.memo(
  KUIConnect(({ translate }) => ({ translate }))(DateFilterButtonComponent),
);
