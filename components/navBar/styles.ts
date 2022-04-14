import { createStyles } from '@material-ui/core/styles';

import theme from '../../config/theme';

export const styles = createStyles({
  rightContainer: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  phoneContact: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
});
