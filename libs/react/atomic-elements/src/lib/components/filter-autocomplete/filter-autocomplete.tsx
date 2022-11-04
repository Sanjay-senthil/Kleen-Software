import { KsAutocomplete, KsMenuContainer } from '@kleeen/react/components';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';
import React, { ComponentType, HTMLAttributes, ReactElement } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';

import { AutocompleteProps } from '@material-ui/lab/Autocomplete';
import { FilterOption } from '../FilterSection/FilterSection.model';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { KUIConnect } from '@kleeen/core-react';
import { ListboxComponent } from './components/listbox';
import { useTheme } from '@kleeen/react/hooks';

interface FilterAutocompleteProps
  extends Omit<AutocompleteProps<any, boolean, boolean, boolean>, 'renderInput'> {
  renderInput?: () => void;
  textFieldProps?: TextFieldProps;
  withoutMenuTransform?: boolean;
  defaultSelectedValue?: any[];
  options: FilterOption[];
  noHelperText?: boolean;
  translate?: any;
}

const TextField = styled(MuiTextField)({
  '& .MuiInputBase-root': {
    backgroundColor: 'var(--secondary-color)',
    color: 'var(--on-secondary-color)',
    cursor: 'pointer',
    '&:hover, &.Mui-focused': {
      backgroundColor: 'var(--secondary-color-variant)',
      color: 'var(--on-secondary-color-variant)',
    },
    '&.MuiFilledInput-underline:before, &.MuiFilledInput-underline:after': {
      borderBottomColor: 'var(--secondary-color)',
    },
  },
  '& label': {
    color: 'var(--on-secondary-color)',
  },
  '& label.Mui-focused': {
    color: 'var(--on-secondary-color)',
  },
  '& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
    cursor: 'pointer',
  },
  '& .MuiFormHelperText-contained': {
    color: 'var(--on-surface-color)',
    fontSize: '8px',
    marginLeft: '0px',
    marginRight: 'var(--pm-0)',
  },
});

const useStyles = makeStyles({
  menu: (props: { withoutMenuTransform: boolean }) => ({
    overflow: 'hidden',
    // TODO @kleeen transform doesn't move the backdrop filter for glass styling.
    // check how to position element correctly and still keep backdrop filter (aka blur)
    transform: props.withoutMenuTransform ? '' : 'translate(102%, -56px)',
    '& .MuiAutocomplete-groupLabel': {
      backgroundColor: 'var(--nav-top-bg-color)',
      color: 'var(--on-nav-top-bg-color)',
      fontSize: 'var(--tx-S)',
      fontWeight: 'bold',
      lineHeight: 'var(--tx-S)',
      padding: 'var(--pm-5XS) var(--pm-1XS) var(--pm-6XS)',
    },
    '& .MuiAutocomplete-option': {
      '&:hover': {
        backgroundColor: 'var(--secondary-color-variant)',
        color: 'var(--on-secondary-color-variant)',
      },
      fontSize: 'var(--tx-M)',
      padding: 'var(--pm-4XS) var(--pm-1XS)',
    },
  }),
});

const FilterAutocomplete = ({
  noHelperText,
  options,
  placeholder,
  renderInput,
  textFieldProps,
  translate,
  withoutMenuTransform,
  ...restProps
}: FilterAutocompleteProps): ReactElement => {
  const { themeClass } = useTheme();
  const classes = useStyles({ withoutMenuTransform: true });
  return (
    <KsAutocomplete
      disableClearable={false}
      disableCloseOnSelect
      filterSelectedOptions
      forcePopupIcon={false}
      ListboxComponent={ListboxComponent as unknown as ComponentType<HTMLAttributes<HTMLElement>>}
      noOptionsText={translate('app.subHeader.filterSection.noOptions')}
      options={options}
      PaperComponent={({ children }) => {
        return <KsMenuContainer className={`${themeClass} ${classes.menu}`}>{children}</KsMenuContainer>;
      }}
      renderGroup={function (params) {
        return [
          <div className="MuiListSubheader-root MuiAutocomplete-groupLabel" key={params.key}>
            {params.group}
          </div>,
          params.children,
        ];
      }}
      renderInput={(params) => (
        <TextField
          helperText={!noHelperText ? translate('app.filterSection.helperText') : ''}
          label={translate('app.filterSection.inputLabel')}
          placeholder={placeholder ? placeholder : ''}
          variant="filled"
          {...params}
          {...textFieldProps}
        />
      )}
      renderOption={(option: { displayName?: string; name: string }) => {
        return !isNilOrEmpty(option?.displayName) ? option?.displayName : option?.name;
      }}
      {...restProps}
    />
  );
};

export default KUIConnect(({ translate }) => ({ translate }))(FilterAutocomplete);
