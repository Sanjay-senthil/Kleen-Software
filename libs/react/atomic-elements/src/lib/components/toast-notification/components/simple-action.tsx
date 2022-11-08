import { KsMenuItem } from '@kleeen/react/components';
import { makeStyles } from '@material-ui/core/styles';

export interface SimpleActionProps {
  title: string;
  onClick: () => void;
}

const useActionContainerClass = makeStyles({
  actionContainer: {
    display: 'flex',
    color: 'var(--on-surface-color)',
  },
});

export function SimpleAction({ onClick, title }: SimpleActionProps) {
  const classes = useActionContainerClass();

  return (
    <div className={classes.actionContainer}>
      <KsMenuItem className="menu-item" key={title} onClick={onClick}>
        {title}
      </KsMenuItem>
    </div>
  );
}
