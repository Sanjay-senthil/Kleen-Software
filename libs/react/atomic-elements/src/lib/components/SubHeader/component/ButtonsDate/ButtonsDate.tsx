import './ButtonDate.scss';

import { ButtonDateProps } from './ButtonDate.model';
import { ButtonSubHeader } from '../ButtonHeader/ButtonSubHeader';
import { DatePickerInterval } from '../../../date-picker-interval';
import React from 'react';
import { useFilters } from '@kleeen/react/hooks';

export const ButtonDate = ({ translate, hasDateFilter }: ButtonDateProps): React.ReactElement => {
  const [isShow, setIsShow] = React.useState(false);
  const [isOnClick, setIsOnClick] = React.useState(true);
  const { datePickerState, handleTimestampFilter } = useFilters(hasDateFilter);

  const handleFilterButton = (): void => {
    handleTimestampFilter();
    setIsShow(false);
  };

  React.useEffect(() => {
    setIsOnClick(!isShow);
  }, [isShow]);

  return (
    <ButtonSubHeader
      className="element-button-date"
      isOnClick={isOnClick}
      isShow={isShow}
      setIsShow={setIsShow}
      translate={translate}
    >
      <DatePickerInterval
        className="nav-top-button-date"
        datePickerState={datePickerState}
        handleFilter={handleFilterButton}
        isOpen={isShow}
        isSetOpen={setIsShow}
        translate={translate}
      ></DatePickerInterval>
    </ButtonSubHeader>
  );
};
