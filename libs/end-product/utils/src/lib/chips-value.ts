import { DataPointValue, TransformationArgs } from '@kleeen/types';

import { isNilOrEmpty } from '@kleeen/common/utils';

export function toChipsValue({ idPath, key, path, row }: TransformationArgs): {
  [key: string]: DataPointValue[];
} {
  const chips = row[path];

  return {
    [key]: chips.map((chip) => {
      const displayValue = chip[path];
      const id = isNilOrEmpty(idPath) ? undefined : chip[idPath];

      return {
        displayValue,
        id,
      };
    }),
  };
}
