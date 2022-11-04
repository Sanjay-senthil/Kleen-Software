import { ReactElement, crosslinkingInteractionType } from '@kleeen/types';
import { createContext, useContext, useMemo } from 'react';

interface CrosslinkingInteractionContext {
  crosslinkingInteraction: crosslinkingInteractionType;
}

const CrosslinkingInteractionContext = createContext<CrosslinkingInteractionContext>({
  crosslinkingInteraction: crosslinkingInteractionType.onClick,
});

export function useCrosslinkingInteraction() {
  const context = useContext<CrosslinkingInteractionContext>(CrosslinkingInteractionContext);

  if (!context) {
    throw new Error('This hook cannot be consumed outside "CrosslinkingInteractionProvider" component');
  }

  return context;
}

interface CrosslinkingInteractionProviderProps {
  children: ReactElement;
  crosslinkingInteraction: crosslinkingInteractionType;
}

export function CrosslinkingInteractionProvider({
  children,
  crosslinkingInteraction,
}: CrosslinkingInteractionProviderProps) {
  const crosslinkingInteractionValue = useMemo(
    () => ({
      crosslinkingInteraction,
    }),
    [crosslinkingInteraction],
  );

  return (
    <CrosslinkingInteractionContext.Provider value={crosslinkingInteractionValue}>
      {children}
    </CrosslinkingInteractionContext.Provider>
  );
}
