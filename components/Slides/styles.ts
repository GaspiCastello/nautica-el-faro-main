import { createStyles } from '@material-ui/core/styles';

export const styles = createStyles({
  slidesContainer: {
    width: '100%',
    height: '20%',
    position: 'relative',
    display: 'flex',
    '@media (max-width:600px)': {
      flexDirection: 'column',
    },
    '@media (min-width:600px)': {
      flexDirection: 'row',
    },
    justifyContent: 'center',
    color: '#F17215',
  },
});
