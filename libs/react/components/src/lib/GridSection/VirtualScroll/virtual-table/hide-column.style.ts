import { createStyles, makeStyles, styled, withStyles } from '@material-ui/core';

import MuiTooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';

export const SwitchHideColumn = styled(Switch)(() => ({
  padding: 'var(--pm-1XS)',
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      height: 'var(--wh-4XS)',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 'var(--wh-4XS)',
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    height: 'var(--wh-4XS)',
    margin: 'var(--pm-6XS)',
    width: 'var(--wh-4XS)',
  },
}));

export const Tooltip = withStyles(() => ({
  tooltip: {
    top: 'var(--pm-M)',
  },
}))(MuiTooltip);

export const useStyles = makeStyles(() =>
  createStyles({
    chip: {
      background: 'var(--secondary-color)',
      borderColor: 'var(--on-secondary-color);',
      color: 'var(--on-secondary-color)',
      height: 'var(--wh-3XS)',
      width: 'var(--wh-4XL)',
      '& .MuiSvgIcon-root': {
        color: 'var(--on-secondary-color);',
        height: 'var(--wh-2XS)',
        width: 'var(--wh-2XS)',
      },
      '&.MuiChip-clickable.MuiChip-outlined:hover': {
        background: 'var(--secondary-color-variant)',
      },
    },
    header: {
      alignItems: 'center',
      color: 'var(--on-surface-color)',
      display: 'flex',
      fontSize: 'var(--tx-L)',
      fontWeight: 'bold',
      height: '100%',
      justifyContent: 'center',
      lineHeight: 'var(--tx-3XL)',
      width: '100%',
    },
    label: {
      '& .MuiTypography-root': {
        '&.MuiFormControlLabel-label': {
          display: 'block',
          maxWidth: 'var(--wh-2XL)',
          overflow: 'hidden',
          textAlign: 'left',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      },
    },
    paper: {
      backgroundColor: 'var(--surface-color)',
      backdropFilter: ' blur(4px)',
      boxShadow: 'var(--shadow-elevation-mid-key)',
      color: 'var(--on-surface-color)',
      margin: 'calc(var(--pm-M) * -1)',
      overflow: 'visible',
      padding: 'var(--pm-1XS) var(--pm-L)',
      position: 'relative',
      width: 'calc(var(--wh-4XL) + var(--wh-4XS))',
    },
    popover: {
      boxShadow: 'var(--shadow-elevation-mid-key)',
      marginLeft: 'calc(var(--pm-7XS) - var(--pm-1XL))',
    },
    hiddenFieldsHeader: {
      alignItems: 'center',
      backgroundColor: 'hsla(var(--on-surface-color-hsl), 0.7)',
      borderRadius: 'var(--pm-3XS)',
      display: 'flex',
      height: 'var(--wh-5XS)',
      justifyContent: 'space-between',
      paddingLeft: 'var(--pm-L)',
      transition: 'height var(--speed-medium)',
      transitionDelay: 'var(--speed-medium)',
      width: '100%',
      zIndex: 100,
      '&:hover': {
        height: 'var(--wh-2XS)',
        '& $hiddenFieldsHeaderActionsContainer': {
          opacity: 1,
          transitionDelay: 'var(--speed-medium)',
        },
        '& $hiddenFieldsHeaderTitle': {
          opacity: 0,
        },
      },
    },
    hiddenFieldsHeaderActionsContainer: {
      color: 'var(--on-secondary-color-variant)',
      fontSize: 'var(--tx-S)',
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      textOverflow: 'ellipsis',
      textTransform: 'uppercase',
      transition: 'opacity var(--speed-medium)',
      whiteSpace: 'nowrap',
      width: '40%',
    },
    hiddenFieldsHeaderTitle: {
      color: 'var(--on-secondary-color-variant)',
      fontSize: 'var(--tx-S)',
      opacity: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textTransform: 'uppercase',
      transition: 'opacity var(--speed-medium)',
      whiteSpace: 'nowrap',
      width: '40%',
    },
  }),
);
