import './ConfigView.scss';

import { ConfigureLayoutStyle, SnackBarSection } from '@kleeen/react/atomic-elements';
import { useEffect, useState } from 'react';

import CardSection02 from '../CardSection/CardSection02';
import { useEntityDetailsEventHandler } from '@kleeen/react/hooks';

const ConfigView = ({ widgets, taskName, entityActions }): JSX.Element => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [_, { addEvent, clearEventList, onSaveEvents, onCancelEvents }] = useEntityDetailsEventHandler();
  const classes = ConfigureLayoutStyle();
  const mainContainerId = `container-id-${classes.configCardSection}`;

  useEffect(() => {
    return clearEventList;
  }, []);

  function onCancel() {
    setIsSnackbarVisible(false);
    onCancelEvents();
  }
  function onSave() {
    setIsSnackbarVisible(false);
    const widgetsData = onSaveEvents();
    const dataList = widgetsData
      .filter((current) => current.entity)
      .map((current) => {
        return {
          ...current,
          params: {
            ...current.params,
          },
        };
      });

    dataList.map((data) => entityActions.updateRequest(data));
  }

  return (
    <div
      id={mainContainerId}
      className={`${classes.configCardSection} ${isSnackbarVisible ? classes.snackbarNavTop : ''} `}
    >
      <CardSection02
        justifyContent={'center'}
        hideSaveAndClose
        widgets={widgets}
        containerId={mainContainerId}
        taskName={taskName}
        registerEvents={addEvent}
        onInputChange={setIsSnackbarVisible}
      />
      <SnackBarSection
        entityActions={entityActions}
        className="on-bottom"
        showSnackBar={isSnackbarVisible}
        actions={[
          {
            type: 'CUSTOM',
            label: 'SAVE',
            func: onSave,
          },
          {
            type: 'CUSTOM',
            label: 'CANCEL',
            func: onCancel,
          },
        ]}
      />
    </div>
  );
};

export default ConfigView;
