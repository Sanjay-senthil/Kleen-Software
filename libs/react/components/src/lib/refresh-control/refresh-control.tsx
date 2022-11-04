import { CURRENT_INTERVAL_KEY, TimeIntervals } from '@kleeen/types';
import { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { Pause, PlayArrow } from '@material-ui/icons';
import {
  RefreshControlFab,
  RefreshControlListSubheader,
  RefreshControlMenuItem,
  RefreshControlSelect,
} from './refresh-control.components';
import { useAutoRefresh, useLocalStorage, useTheme, useUserInfo } from '@kleeen/react/hooks';
import { usePopOverStyles, useStyles } from './refresh-control.style';

import { CircularProgress } from '../circularProgress';
import { KUIConnect } from '@kleeen/core-react';
import { RefreshControlProps } from './refresh-control.model';
import { Subscription } from 'rxjs/internal/Subscription';
import classnames from 'classnames';

const DEFAULT_INTERVAL = 5;
const MIN_INTERVAL = 0.25;
const REFRESH = 0;

const KsRefreshControlComponent = ({
  onRefresh,
  pause = false,
  taskName,
  translate,
}: RefreshControlProps): ReactElement => {
  const _user = useUserInfo();
  const userName = _user?.userInfo?.username;
  const currentIntervalKey = userName ? `${CURRENT_INTERVAL_KEY}${userName}-${taskName}` : '';
  const { localStorageValue, setLocalStorageValue } = useLocalStorage(currentIntervalKey, DEFAULT_INTERVAL);
  const classes = useStyles();
  const popoverClasses = usePopOverStyles();
  const { themeClass } = useTheme();
  const [percent, setPercent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isTimerPaused = useRef(false);
  const isPreviewTimerPaused = useRef(false);
  const currentInterval = useRef(MIN_INTERVAL);
  const updateAt = useRef(Date.now() + currentInterval.current * 60 * 1000);
  const currentTime = useRef(Date.now() + 5 * 60 * 1000);
  const { autoRefresh$ } = useAutoRefresh();
  let autoRefreshSubscription: Subscription;

  useEffect(() => {
    autoRefreshSubscription = autoRefresh$.subscribe((workflows: string | string[]) => {
      if (workflows.includes(taskName)) resetControl();
    });

    return () => autoRefreshSubscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!isPreviewTimerPaused.current) {
      isTimerPaused.current = pause;
      setIsPaused(pause);
    }
  }, [pause]);

  useEffect(() => {
    currentInterval.current = Number(localStorageValue);
    updateAtCurrent();
  }, [localStorageValue]);

  useEffect(() => {
    const timer = setInterval(progress, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function getMillisecondsRemaining(): number {
    return updateAt.current - currentTime.current;
  }

  function getPercentElapsed(interval: number): number {
    return 100 - (getMillisecondsRemaining() / (interval * 60 * 1000)) * 100;
  }

  function onTimeIntervalChange(intervalInMinutes: number) {
    currentInterval.current = intervalInMinutes;
    resetControl();
    setLocalStorageValue(intervalInMinutes.toString());
  }

  function progress() {
    if (isTimerPaused.current) {
      updateAt.current = updateAt.current + 1000;
    }
    if (Date.now() >= updateAt.current) {
      updateAtCurrent();
      setPercent(100);
      setTimeout(onRefresh, 1000);
    } else {
      currentTime.current = Date.now();
      setPercent(getPercentElapsed(currentInterval.current));
    }
  }

  function resetControl() {
    setPercent(0);
    updateAtCurrent();
  }

  function togglePause() {
    isPreviewTimerPaused.current = !isTimerPaused.current;
    isTimerPaused.current = !isTimerPaused.current;
    setIsPaused(!isPaused);
  }

  function updateAtCurrent() {
    updateAt.current = Date.now() + currentInterval.current * 60 * 1000;
  }

  return (
    <div className={classnames(classes.refreshControl, { [classes.disabledRefreshControl]: pause })}>
      <CircularProgress radius={20} stroke={3} progress={percent}>
        <RefreshControlFab
          onClick={() => {
            togglePause();
          }}
          size="small"
        >
          {isPaused ? <PlayArrow fontSize="small" /> : <Pause fontSize="small" />}
        </RefreshControlFab>
      </CircularProgress>
      <RefreshControlSelect
        disableUnderline
        displayEmpty={true}
        renderValue={() => translate('app.refreshControl.refresh')}
        value=""
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (event.target.value) {
            onTimeIntervalChange(parseFloat(event.target.value));
          }
        }}
        MenuProps={{
          PopoverClasses: popoverClasses,
          className: themeClass,
        }}
      >
        <RefreshControlListSubheader>
          {translate('app.refreshControl.timeIntervals')}
        </RefreshControlListSubheader>
        {TimeIntervals.map((intervalOption) => (
          <RefreshControlMenuItem key={intervalOption.value} value={intervalOption.value}>
            {intervalOption.value === currentInterval.current && <div className={classes.dot} />}
            {translate(intervalOption.translateKey)}
          </RefreshControlMenuItem>
        ))}
        <RefreshControlListSubheader>{translate('app.refreshControl.actions')}</RefreshControlListSubheader>
        <RefreshControlMenuItem onClick={() => onRefresh()} value={REFRESH}>
          {translate('app.refreshControl.refreshNow')}
        </RefreshControlMenuItem>
        <RefreshControlMenuItem
          onClick={() => {
            togglePause();
          }}
        >
          {translate(isPaused ? 'app.refreshControl.resume' : 'app.refreshControl.pause')}
        </RefreshControlMenuItem>
      </RefreshControlSelect>
    </div>
  );
};

export const KsRefreshControl = KUIConnect(({ translate }) => ({ translate }))(KsRefreshControlComponent);
