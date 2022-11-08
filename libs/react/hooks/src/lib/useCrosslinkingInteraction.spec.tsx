import { CrosslinkingInteractionProvider, useCrosslinkingInteraction } from './use-crosslinking-interaction';

import { crosslinkingInteractionType } from '@kleeen/types';
import { renderHook } from '@testing-library/react-hooks';

const InteractionProviderWrapper = ({ children }) => (
  <CrosslinkingInteractionProvider crosslinkingInteraction={crosslinkingInteractionType.contextMenu}>
    {children}
  </CrosslinkingInteractionProvider>
);

describe('useCrosslinkingInteraction', () => {
  test('Should return the interaction assigned on the provider', () => {
    const renderedHook = renderHook(() => useCrosslinkingInteraction(), {
      wrapper: InteractionProviderWrapper,
    });
    const crosslinkingInteractionContext = renderedHook.result.current;

    expect(crosslinkingInteractionContext?.crosslinkingInteraction).toBe(
      crosslinkingInteractionType.contextMenu,
    );
  });
});
