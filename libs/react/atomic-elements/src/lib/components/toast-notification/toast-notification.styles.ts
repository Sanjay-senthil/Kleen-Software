import { makeStyles, styled } from '@material-ui/core/styles';

import MuiIconButton from '@material-ui/core/IconButton';

export const IconButton = styled(MuiIconButton)({
  '&:hover': {
    color: 'var(--secondary-color-variant)',
  },
});

export const useToastNotificationStyles = makeStyles((theme) => ({
  actionContainer: {
    color: 'var(--on-surface-color)',
    display: 'flex',
  },
  actionMenu: {
    margin: '0 var(--pm-5XS) 0 var(--pm-5XS)',
    color: 'var(--on-surface-color)',
  },
  card: {
    backgroundColor: 'var(--transparent)',
    boxShadow: 'var(--notification-shadow-color)',
    display: 'flex',
    width: 'var(--wh-8XL)',
  },
  collapse: {
    padding: 'var(--pm-L)',
  },
  content: {
    backgroundColor: 'var(--notification-bg-color)',
    color: 'var(--h3-title-color)',
    display: 'block',
    padding: 'var(--pm-1XS) var(--pm-M) var(--pm-1XS) var(--pm-M)',
    width: '100%',
  },
  description: {
    color: 'var(--on-surface-color)',
    fontSize: 'var(--tx-M)',
    margin: '0 !important',
  },
  dismiss: {
    margin: '0 var(--pm-5XS) 0 var(--pm-5XS)',
  },
  expand: {
    color: 'var(--on-surface-color)',
    padding: 0,
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  icon: {
    alignItems: 'center',
    color: 'var(--white)',
    height: 'var(--wh-3XS)',
    justifyContent: 'center',
    width: 'var(--wh-3XS)',
  },
  iconAction: {
    height: 'var(--wh-2XS)',
    margin: 0,
    padding: 0,
    width: 'var(--wh-2XS)',
  },
  iconContent: {
    alignItems: 'center',
    display: 'flex',
    height: 'inherit',
    justifyContent: 'center',
    margin: 0,
    width: 'var(--wh-1XS)',
  },
  header: {
    justifyContent: 'space-between',
    padding: '0 !important',
  },
  title: {
    color: 'var(--on-surface-color)',
    fontSize: 'var(--tx-L)',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  variantSuccess: {
    background: 'var(--primary-color)',
  },
  variantError: {
    background: 'var(--notification-error-color)',
  },
}));
