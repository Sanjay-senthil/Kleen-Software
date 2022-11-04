import { IconButton, useToastNotificationStyles } from './toast-notification.styles';
import { ReactNode, forwardRef } from 'react';

import { ActionMenu } from './components/action-menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/HighlightOffRounded';
import { Grid } from '@material-ui/core';
import { KsIntlMessage } from '@kleeen/react/components';
import { ToastNotificationProps } from './toast-notification.model';
import Typography from '@material-ui/core/Typography';
import { useSnackbar } from 'notistack';
import { useTheme } from '@kleeen/react/hooks';

export const ToastNotification = forwardRef((props: ToastNotificationProps, ref) => {
  const { closeSnackbar } = useSnackbar();
  const { themeClass } = useTheme();
  const classes = useToastNotificationStyles();
  const { action, actions, functionName, message, taskName, title, variant } = props.message;

  function handleDismiss() {
    closeSnackbar(props.id);
  }

  return (
    <Card className={`${themeClass} ${classes.card}`} data-testid="toast-notification" ref={ref}>
      {variant == 'error' ? (
        <Grid
          className={`${classes.iconContent} ${classes.variantError}`}
          data-testid="toast-notification-error"
        >
          <ErrorIcon className={classes.icon} />
        </Grid>
      ) : (
        <Grid
          className={`${classes.iconContent} ${classes.variantSuccess}`}
          data-testid="toast-notification-success"
        >
          <CheckIcon className={classes.icon} />
        </Grid>
      )}
      <Grid className={classes.content}>
        <CardActions classes={{ root: classes.header }}>
          <Typography className={classes.title} variant="subtitle2">
            <KsIntlMessage message={title || getGenericTitle(variant, functionName)} />
          </Typography>
          <div className={classes.actionContainer}>
            <div className={classes.actionMenu}>
              <ActionMenu action={action} actions={actions} taskName={taskName} />
            </div>
            <div className={classes.dismiss}>
              <IconButton
                className={classes.expand}
                data-testid="toast-notification-close"
                onClick={handleDismiss}
              >
                <CloseIcon className={classes.iconAction} />
              </IconButton>
            </div>
          </div>
        </CardActions>
        <Typography className={classes.description} variant="subtitle2">
          {message ? <KsIntlMessage message={message} /> : getGenericMessage(variant, functionName)}
        </Typography>
      </Grid>
    </Card>
  );
});

//#region Private members
function getGenericMessage(variant: 'error' | 'success', functionName: string): ReactNode {
  return variant === 'success' ? (
    <>
      <span style={{ textTransform: 'capitalize' }}>{functionName}</span>
      {` was successfully completed.`}
    </>
  ) : (
    <>
      {`Unfortunately, `}
      <span style={{ textTransform: 'capitalize' }}>{functionName}</span>
      {` failed, please try again.`}
    </>
  );
}

function getGenericTitle(variant: 'error' | 'success', functionName: string): string {
  return variant === 'success' ? `${functionName} successful` : `${functionName} failed`;
}
//#endregion
