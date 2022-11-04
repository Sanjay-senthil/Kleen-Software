import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  optionButtons: {
    '&:hover': {
      backgroundColor: 'var(--primary-color-variant)',
      color: 'var(--on-primary-color-variant)',
    },
  },
  paper: {
    backgroundColor: 'var(--surface-color)',
    borderRadius: '0',
    boxShadow: 'none',
    color: 'var(--on-surface-color)',
  },
  relativePickerContainer: {
    width: 'var(--wh-6XL)',
    '& .header': {
      alignItems: 'center',
      backgroundColor: 'var(--secondary-color)',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
      color: 'var(--on-secondary-color)',
      display: 'flex',
      fontSize: 'var(--tx-L)',
      height: 'var(--wh-L)',
      justifyContent: 'center',
      textTransform: 'uppercase',
      width: '100%',
    },
    '& .footer': {
      alignItems: 'center',
      backgroundColor: 'var(--surface-color)',
      borderBottomLeftRadius: 'var(--pm-4XS)',
      borderBottomRightRadius: 'var(--pm-4XS)',
      color: 'var(--on-surface-color)',
      display: 'flex',
      fontSize: 'var(--tx-L)',
      height: 'var(--wh-S)',
      justifyContent: 'center',
      width: '100%',
    },
    '& .MuiListItem-root': {
      justifyContent: 'center',
      textTransform: 'uppercase',
    },
  },
  selectedOptionButton: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--on-primary-color)',
    '&:hover': {
      backgroundColor: 'var(--primary-color)',
      color: 'var(--on-primary-color)',
    },
  },
}));
