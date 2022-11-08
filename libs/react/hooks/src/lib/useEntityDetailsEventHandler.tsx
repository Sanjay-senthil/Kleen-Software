import { AttributeInputEvents, RegisterEvents } from '@kleeen/types';

type UseEntityDetailsEventHandlerFn = () => [
  /**
   * @deprecated in favor of `onSaveEvents` and `onCancelEvents`.
   */
  AttributeInputEvents[],
  {
    addEvent: RegisterEvents;
    clearEventList: () => void;
    onSaveEvents: () => any[];
    onCancelEvents: () => void;
  },
];

// FIXME: avoid this to be a global variable. It should be in the local state.
let configInputEventList: AttributeInputEvents[] = [];

export const useEntityDetailsEventHandler: UseEntityDetailsEventHandlerFn = () => {
  return [
    configInputEventList,
    {
      addEvent,
      clearEventList,
      onSaveEvents,
      onCancelEvents,
    },
  ];
};

function addEvent(event: AttributeInputEvents) {
  if (Object.prototype.hasOwnProperty.call(event, 'id')) {
    configInputEventList = configInputEventList.filter(
      (currentEvent) => !currentEvent.id || currentEvent.id !== event.id,
    );
  }
  configInputEventList.push(event);
}

// FIXME: move this to an effect inside this hook, that runs on unmount.
function clearEventList() {
  configInputEventList = [];
}

function onSaveEvents() {
  return configInputEventList.map((event) => event.onSave()).filter(Boolean);
}

function onCancelEvents() {
  return configInputEventList.map((event) => event.onCancel());
}
