import './InputFormSection.scss';

import { ReactElement, useState } from 'react';

import { StatisticalDataType } from '@kleeen/types';
import { TransformToElement } from '../widgets/config-input-widget';
import classnames from 'classnames';

const bem = 'ks-input-form-section';
interface InputFormSectionProps {
  autoCompleteValues?: any;
  component?: any;
  connector?: string;
  defaultValue?: any;
  errors?: any;
  helpText?: string;
  icon?: JSX.Element | null;
  inputRef?: any;
  inputValue?: any;
  isTextField?: boolean;
  name?: string;
  placeholder?;
  setInputValue?: any;
  setSelectedOption?;
  setValue?: any;
  value?: any;
}

export const InputFormSection = ({ ...props }: InputFormSectionProps): ReactElement => {
  const {
    autoCompleteValues,
    component,
    connector,
    defaultValue,
    errors,
    helpText,
    icon = null,
    inputRef,
    isTextField,
    name,
    placeholder,
    setSelectedOption,
    setValue,
    value,
  } = props;
  const [inputValue, setInputValue] = useState(defaultValue ? defaultValue.displayValue : '');
  const onSetInputValue = (event) => {
    setValue ? setValue(event) : setInputValue(event);
  };

  return (
    <div className={classnames(bem, 'input-form-section')}>
      <div className={classnames(`${bem}__label`, 'input-form-section-label')}>
        <div className={classnames(`${bem}__label--icon`, 'icon-container')}>{icon}</div>
        <div className={classnames(`${bem}__label--name`, 'name-container')}>{name}</div>
        <div className={classnames(`${bem}__label--connector`, 'connector-container')}>{connector}</div>
      </div>
      <div
        className={classnames(
          `${bem}__form`,
          isTextField ? `input-form-section-input input-field` : `input-form-section-input`,
        )}
      >
        {component ? (
          component
        ) : (
          <TransformToElement
            attrLabel={placeholder}
            autoCompleteValues={autoCompleteValues}
            canAddValues={isTextField}
            disabled={false}
            elementToUse="Field Can Add Values and Not Have Many"
            errors={errors}
            format={{}}
            formatType={''}
            helpText={helpText}
            hideTitle={false}
            inSummaryDetails={false}
            inputValue={value ? value : inputValue}
            refValue={inputRef}
            setInputValue={onSetInputValue}
            setSelectedOption={setSelectedOption}
            statisticalType={StatisticalDataType.Data}
          />
        )}
      </div>
    </div>
  );
};

export default InputFormSection;
