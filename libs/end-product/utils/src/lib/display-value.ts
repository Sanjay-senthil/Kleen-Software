import { DataPointValue, DisplayMedia, TransformationArgs } from '@kleeen/types';

import { getDisplayMedia } from './display-media';
import { getThingByName } from '@kleeen/things';
import { isNilOrEmpty } from '@kleeen/common/utils';

export function toDisplayValue({ idPath, key, path, row, showDisplayMedia }: TransformationArgs): {
  [key: string]: DataPointValue;
} {
  const thing = getThingByName(key);

  const displayValue = row[path];
  const format = thing?.format;
  const formatType = thing?.formatType;
  const id = isNilOrEmpty(idPath) ? undefined : row[idPath];

  return {
    [key]: {
      displayValue,
      id,
      ...(typeof displayValue === 'string' && showDisplayMedia
        ? {
            displayMedia: getDisplayMedia(formatType, displayValue, format) as DisplayMedia,
          }
        : {}),
    },
  };
}
