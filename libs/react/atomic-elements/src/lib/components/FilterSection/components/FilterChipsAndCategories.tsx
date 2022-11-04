import { Chip } from '../FilterSection.styles';
import { FilterOperators, ReactElement, TimestampKey } from '@kleeen/types';
import { IconButton } from '@material-ui/core';

import classnames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';
import MuiTooltip from '@material-ui/core/Tooltip';
import { getTranslationByThingName } from '@kleeen/react/atomic-elements';

type FilterItemProp = [
  string,
  {
    _in: string[];
    _notIn: string[];
    max?: string;
    min?: string;
  },
];

const bem = 'ks-filter-chips-and-categories';

const FilterItem = ({ option, remove }): ReactElement => (
  <MuiTooltip title={option} placement="top">
    <Chip label={option} onDelete={remove} variant="outlined" />
  </MuiTooltip>
);

const FiltersComp = ({ filters = {}, removeValue, removeCategory, translate }): ReactElement => {
  const onRemove = (cat: string): void => {
    removeCategory(cat);
  };

  const FilterItemAdded = ({ filter }: { filter: FilterItemProp }): ReactElement => {
    const [cat, { _in: values = [], _notIn: valuesIsNot = [], max, min }]: FilterItemProp = filter;
    return (
      <div>
        <div className={classnames(bem, 'category-section')}>
          {(values.length !== 0 || valuesIsNot.length !== 0 || min || max) && (
            <>
              <p>{getTranslationByThingName(cat, translate)}</p>
              <div className={classnames(`${bem}__container--deleted`, 'deleted-container')}>
                <MuiTooltip title="remove">
                  <span>
                    <IconButton
                      aria-label="delete"
                      className=""
                      disabled={false}
                      onClick={() => onRemove(cat)}
                    >
                      <CloseIcon className={''} />
                    </IconButton>
                  </span>
                </MuiTooltip>
              </div>
            </>
          )}
        </div>
        <div className={classnames(`${bem}__filters`, 'filters-section')}>
          {values.map((name, index) => {
            const auxKey = name.toString().split(TimestampKey.key);
            const auxLabel =
              auxKey.length > 1 ? moment(Number(auxKey[1])).format(TimestampKey.format) : auxKey[0];
            return (
              <FilterItem
                key={`filter-comp-item-${index}`}
                remove={() => {
                  removeValue(cat, name, FilterOperators.in);
                }}
                option={`Is ${auxLabel}`}
              />
            );
          })}
          {valuesIsNot.map((name, index) => {
            const auxKey = name.toString().split(TimestampKey.key);
            const auxLabel =
              auxKey.length > 1 ? moment(Number(auxKey[1])).format(TimestampKey.format) : auxKey[0];
            return (
              <FilterItem
                key={`filter-comp-item-${index}`}
                remove={() => {
                  removeValue(cat, name, FilterOperators.notIn);
                }}
                option={`Is not ${auxLabel}`}
              />
            );
          })}
          {max && (
            <FilterItem
              key={`filter-comp-item-max`}
              remove={() => {
                removeValue(cat, name, FilterOperators.max);
              }}
              option={`Max is ${max}`}
            />
          )}
          {min && (
            <FilterItem
              key={`filter-comp-item-min`}
              remove={() => {
                removeValue(cat, name, FilterOperators.min);
              }}
              option={`Min is ${min}`}
            />
          )}
        </div>
      </div>
    );
  };
  return (
    <div className={classnames(`${bem}__categories`, 'categories-container')}>
      {Object.entries(filters).map((filter: FilterItemProp, index) => (
        <FilterItemAdded filter={filter} key={`filter-item-applied-${index}`} />
      ))}
    </div>
  );
};

export default FiltersComp;
