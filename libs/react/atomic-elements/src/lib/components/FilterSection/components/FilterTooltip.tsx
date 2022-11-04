import { Badge, Tooltip } from '../FilterSection.styles';
import { ClassNameBem, FilterOperators } from '@kleeen/types';
import React, { ReactElement } from 'react';

import { FilterAdded } from '../FilterSection.model';
import { KUIConnect } from '@kleeen/core-react';
import classnames from 'classnames';
import { getTranslationByThingName } from '@kleeen/react/atomic-elements';
import { useTheme } from '@kleeen/react/hooks';

const bem = ClassNameBem.FilterTooltip;

export const filterTooltipFunc = (
  paramsBasedOnRoute,
  translate,
): {
  badgeContent: number;
  PopperProps: { className?: string; style?: { [key: string]: any } };
  title: ReactElement;
} => {
  const { themeClass } = useTheme();

  if (!paramsBasedOnRoute) {
    return {
      badgeContent: 0,
      PopperProps: {},
      title: <></>,
    };
  }

  const filterTitles = Object.keys(paramsBasedOnRoute);
  const filtersMap: FilterAdded[] = Object.values(paramsBasedOnRoute).map((filter) => filter);

  return {
    PopperProps: { className: `${themeClass}`, style: { zIndex: 2 } },
    badgeContent: filterTitles.length,
    title: (
      <ul className={classnames(bem)}>
        <li className={classnames(`${bem}__item--applied`)}>{`${filterTitles.length} ${translate(
          'app.subHeader.buttonFilter.currentFilters',
        )}`}</li>

        {filterTitles.map((title, i) => (
          <>
            <span>{getTranslationByThingName(title, translate)}:</span>
            {filtersMap[i][FilterOperators.min] && <li>• Minimum is {filtersMap[i][FilterOperators.min]}</li>}
            {filtersMap[i][FilterOperators.in]?.map((filter) => (
              <li>• Is {filter}</li>
            ))}
            {filtersMap[i][FilterOperators.notIn]?.map((filter) => (
              <li>• Is not {filter}</li>
            ))}
            {filtersMap[i][FilterOperators.max] && <li>• Maximum is {filtersMap[i][FilterOperators.max]}</li>}
          </>
        ))}
      </ul>
    ),
  };
};

const FilterTooltipComponent = (props: { children; paramsBasedOnRoute; translate }): ReactElement => {
  const filter = filterTooltipFunc(props.paramsBasedOnRoute, props.translate);

  return (
    <Tooltip title={filter.title} PopperProps={filter.PopperProps} placement="right" interactive>
      <Badge badgeContent={filter.badgeContent} color="primary">
        {props.children}
      </Badge>
    </Tooltip>
  );
};

const FilterTooltip = React.memo(KUIConnect(({ translate }) => ({ translate }))(FilterTooltipComponent));

export default FilterTooltip;
