import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  endSeparator: {
    borderRight: 'var(--table-cell-border-right)',
    minWidth: 0,
  },
  headerSection: {
    display: 'flex',
    '&:first-of-type': {
      minWidth: 0,
    },
  },
  widgetHeader: {
    display: 'flex',
    minHeight: 'var(--wh-S)',
  },
  headerSub: {
    width: '100%',
  },
});
