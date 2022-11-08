import { DisplayMediaKapiTypeSupported, DisplayMediaType } from '@kleeen/types';

import codeCountries from '../data/countryCode.json';
import { cryptoRandom } from '@kleeen/backend/utils';
import { isNilOrEmpty } from '@kleeen/common/utils';

export function getDisplayMedia(dataType, displayValue, format) {
  const severityLevels = () => format?.valueLabels || [];
  const isSeverityObject = (severityObject) => severityObject.label === displayValue;
  const getCountryFlagURL = (country: string) =>
    isNilOrEmpty(country) ? '' : `https://flagcdn.com/h20/${country || 'ah'}.png`;

  switch (dataType) {
    case DisplayMediaKapiTypeSupported.Username:
    case DisplayMediaKapiTypeSupported.FullName:
    case DisplayMediaKapiTypeSupported.FirstName:
      return {
        type: DisplayMediaType.Src,
        value: `https://fakeface.rest/thumb/view/${Math.floor(cryptoRandom() * 1000)}`,
      };
    case DisplayMediaKapiTypeSupported.City:
    case DisplayMediaKapiTypeSupported.Prime:
      return { type: DisplayMediaType.Text, value: displayValue };
    case DisplayMediaKapiTypeSupported.Country:
      return {
        type: DisplayMediaType.Flag,
        value: getCountryFlagURL(codeCountries[displayValue]?.toLowerCase()),
      };
    case DisplayMediaKapiTypeSupported.CountryCode:
      return {
        type: DisplayMediaType.Flag,
        value: getCountryFlagURL(displayValue?.toLowerCase()),
      };
    case DisplayMediaKapiTypeSupported.SeverityLevel:
      return {
        type: DisplayMediaType.Svg,
        value: `https://raw.githubusercontent.com/KLEEEN-SOFTWARE/Kleeen-svgs/main/assets/severity-levels-svgs/severity-level-${
          severityLevels()?.find(isSeverityObject)?.value
        }of${format?.valueLabels?.length}.svg`,
      };
    default:
      return null;
  }
}
