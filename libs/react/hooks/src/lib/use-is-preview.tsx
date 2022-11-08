import { useEffect, useState } from 'react';

import { WidgetSection } from '@kleeen/types';
import { useWidgetCardContext } from './use-widget-card-provider';

export function useIsPreview() {
  const [isPreview, setIsPreview] = useState(false);
  const widgetCardContext = useWidgetCardContext();

  useEffect(() => {
    setIsPreview(widgetCardContext?.section === WidgetSection.Preview);
  }, [widgetCardContext]);

  return isPreview;
}
