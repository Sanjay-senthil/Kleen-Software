import { Translate } from '@kleeen/types';
import camelcase from 'lodash.camelcase';

export function getTranslationByThingName(name: string, translate: Translate): string {
  return translate(`entities.${camelcase(name)}.${camelcase(name)}`);
}
