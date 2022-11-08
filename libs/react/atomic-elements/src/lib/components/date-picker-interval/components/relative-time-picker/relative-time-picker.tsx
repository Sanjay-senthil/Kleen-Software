import { INTERVAL_DATES, IntervalDate } from '@kleeen/types';

import { KUIConnect } from '@kleeen/core-react';
import { KsButton } from '@kleeen/react/components';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { RelativeTimePickerProps } from './relative-time-picker.model';
import { isNil } from 'ramda';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './relative-time-picker.style';

export function RelativeTimePickerBase({
  datePickerState,
  handleCloseDateFilter,
  handleFilter,
  handleOpenCustomRange,
  setRelativeDate,
  translate,
}: RelativeTimePickerProps) {
  const classes = useStyles();

  const isApply = !isNil(handleFilter);

  function actionButton() {
    if (!isNilOrEmpty(handleFilter)) {
      handleFilter();
    } else {
      datePickerState.setTo(undefined);
      datePickerState.setFrom(undefined);
      datePickerState.setRelativeDate(IntervalDate.allTime);
      handleCloseDateFilterTimeOut();
    }
  }

  function handleCloseDateFilterTimeOut() {
    setTimeout(() => {
      handleCloseDateFilter();
    }, 250);
  }

  function handleMenuItemClick(intervalDate: IntervalDate) {
    setRelativeDate(intervalDate);

    if (!isApply) {
      handleCloseDateFilterTimeOut();
    }
  }

  const { relativeDate } = datePickerState;

  return (
    <div className={classes.relativePickerContainer}>
      <div className="header">{translate('app.dateInterval.title')}</div>
      <Paper className={classes.paper}>
        <MenuList>
          {INTERVAL_DATES.map(({ key, value }) => {
            return (
              <MenuItem
                className={relativeDate === value ? classes.selectedOptionButton : classes.optionButtons}
                key={key}
                onClick={() => handleMenuItemClick(value)}
              >
                {translate(`app.dateInterval.interval.${key}`)}
              </MenuItem>
            );
          })}
          <MenuItem
            className={!relativeDate ? classes.selectedOptionButton : classes.optionButtons}
            key="customDateInterval"
            onClick={handleOpenCustomRange}
          >
            {translate('app.dateInterval.custom')}
          </MenuItem>
        </MenuList>
      </Paper>
      <div className="footer">
        <KsButton onClick={actionButton}>
          {isApply ? translate('app.dateInterval.apply') : translate('app.dateInterval.clear')}
        </KsButton>
      </div>
    </div>
  );
}

export const RelativeTimePicker = React.memo(
  KUIConnect(({ translate }) => ({ translate }))(RelativeTimePickerBase),
);
