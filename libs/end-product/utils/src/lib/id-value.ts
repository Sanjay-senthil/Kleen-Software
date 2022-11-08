import { DataPointValue, TransformationArgs } from '@kleeen/types';

import { isNilOrEmpty } from '@kleeen/common/utils';

export function toIdValue({ idPath, key, row }: TransformationArgs): {
  [key: string]: DataPointValue;
} {
  const id = isNilOrEmpty(idPath) ? undefined : row[idPath];

  return {
    [key]: id,
  };
}
