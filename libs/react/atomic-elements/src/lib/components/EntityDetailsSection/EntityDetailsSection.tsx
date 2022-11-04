import './EntityDetailsSection.scss';

import { AttributeInputEvents, DisplayMedia, ErrorsType, ListingAttribute, Translate } from '@kleeen/types';
import { KsButton, KsMenuContainer } from '@kleeen/react/components';
import { ReactElement, useEffect, useState } from 'react';
import { useEntityDetailsEventHandler, useKleeenActions, useKleeenContext } from '@kleeen/react/hooks';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { KUIConnect } from '@kleeen/core-react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MuiButton from '@material-ui/core/Button';
import MuiToolbar from '@material-ui/core/Toolbar';
import MuiTooltip from '@material-ui/core/Tooltip';
import { SummaryPanel } from '../summary-panel';
import classnames from 'classnames';
import { getUpdateRequestPayload } from '../../utils';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { pathOr } from 'ramda';
import { styled } from '@material-ui/core';
import { useStyles } from './entity-details-section.styles';

const bem = 'ks-entity-details-section';

export interface EntityDetailsSectionProps {
  displayTaskName: string;
  entityDetails: ListingAttribute[];
  isEditable: boolean;
  objectValue?: string;
  onChangeFilterVisible?: (isVisible: boolean) => void;
  taskName: string;
  translate?: Translate;
}

// TODO: @cafe move this to a .styles file
const Paper = styled(KsMenuContainer)({
  borderRadius: 0,
});

const Button = styled(MuiButton)({
  boxShadow: 'none',
  width: 'var(--wh-1XL)',
  '&:hover': {
    boxShadow: 'none',
  },
});

const Toolbar = styled(MuiToolbar)({
  backgroundColor: 'var(--surface-color)',
  'border-radius': 'var(--pm-0)',
  display: 'flex',
  justifyContent: 'center',
});

export function EntityDetailsSectionBase({ translate, ...props }: EntityDetailsSectionProps): ReactElement {
  const { objectValue, taskName } = props;

  if (isNilOrEmpty(taskName)) {
    return null;
  }

  const [attributeEventList, { addEvent, clearEventList }] = useEntityDetailsEventHandler();
  const { updateRequest } = useKleeenActions(taskName);
  const entityData = useKleeenContext<{ isLoading: boolean }>(taskName);
  const [errors, setErrors] = useState<ErrorsType>();
  const [hasErrors, setHasErrors] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  const getDisplayMedia = pathOr<DisplayMedia>({ value: '', type: '' }, [
    'entity',
    objectValue,
    'displayMedia',
  ]);
  const displayMedia = getDisplayMedia(entityData);

  useEffect(() => {
    return clearEventList;
  }, []);

  useEffect(() => {
    if (errors && Object.values(errors).some((error) => error == true)) setHasErrors(true);
    else setHasErrors(false);
  }, [errors]);

  function addErrors(error: ErrorsType): void {
    if (errors) setErrors({ ...errors, ...error });
    else setErrors(error);
  }

  function handleDrawerClose(): void {
    setOpen(false);

    if (props.onChangeFilterVisible) {
      props.onChangeFilterVisible(false);
    }
  }

  function handleDrawerOpen(): void {
    setOpen(true);

    if (props.onChangeFilterVisible) {
      props.onChangeFilterVisible(true);
    }
  }

  function onSave(): void {
    const payload = getUpdateRequestPayload(attributeEventList);
    const hasChanges = !isNilOrEmpty(payload);

    if (hasChanges) {
      updateRequest(payload);
    }
    clearEventList();
    setEditing(false);
  }

  function registerEvents(event: AttributeInputEvents): void {
    addEvent(event);
  }

  return open ? (
    <Paper className={classnames(bem, 'entity-details-section')} elevation={3}>
      <div className={classnames(`${bem}__container`, 'paper-container')}>
        <div className={classnames(`${bem}__attributes`, 'attributes-container')}>
          <div className={classnames(`${bem}__navigation`, 'attributes-navigation')}>
            <KsButton
              className={classnames(`${bem}__navigation--left`, 'attributes-navigation-left')}
              onClick={handleDrawerClose}
            >
              <KeyboardArrowDownIcon className={classnames(`${bem}__close`, 'icon-close')} />
              {translate('app.subHeader.buttonSummary.summaryDetails')}
            </KsButton>
            {props.isEditable && (
              <KsButton
                className={classnames(
                  `${bem}__navigation--right`,
                  'attributes-navigation-right',
                  isEditing && 'attributes-navigation-edit-on',
                )}
                onClick={() => setEditing(!isEditing)}
              >
                {isEditing
                  ? translate('app.subHeader.container.button.editOff')
                  : translate('app.subHeader.container.button.editOn')}
              </KsButton>
            )}
          </div>
          <SummaryPanel
            addErrors={addErrors}
            displayMedia={displayMedia}
            entityDetails={props.entityDetails}
            isEditing={isEditing}
            isLoadingMedia={entityData?.isLoading}
            layoutProps={{
              columnGap: 55,
              containerPadding: 32,
              keyValuePadding: 21,
              keyWidth: 144,
              valueWidth: 178,
            }}
            registerEvents={registerEvents}
            taskName={props.taskName}
          />
        </div>
        {isEditing && (
          <Toolbar>
            <div className={classnames(`${bem}__cta`, { 'button-wrapper': hasErrors })}>
              <Button
                className={classnames(`${bem}__cta`, 'primary-button', { 'has-errors': hasErrors })}
                onClick={onSave}
              >
                {translate('app.subHeader.container.button.save')}
              </Button>
            </div>
          </Toolbar>
        )}
      </div>
    </Paper>
  ) : (
    <Paper elevation={3} className={classnames(`${bem}__container--close`, classes.drawerClose)}>
      <MuiTooltip title="View your entity" placement="top">
        <EditOutlinedIcon className={classes.iconEntity} onClick={handleDrawerOpen} />
      </MuiTooltip>
    </Paper>
  );
}

export const EntityDetailsSection = KUIConnect(({ translate }) => ({ translate }))(EntityDetailsSectionBase);
