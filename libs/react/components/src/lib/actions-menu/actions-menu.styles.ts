import MuiMenu from '@material-ui/core/Menu';
import { styled } from '@material-ui/core';

export const Menu = styled(MuiMenu)({
  '& .MuiMenu-paper': {
    backdropFilter: 'blur(4px)',
    backgroundColor: 'var(--menu-bg-color)',
    color: 'var(--on-surface-color)',
    maxWidth: 'var(--wh-5XL)',
  },
  '& .MuiMenu-list': {
    paddingBottom: 0,
    paddingTop: 0,
  },
  '& .menu-items-container': {
    backgroundColor: 'var(--menu-bg-color)',
    padding: 'var(--pm-1XS) var(--pm-L)',
    '& .MuiListItem-gutters': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  '& .truncate': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});
