import { createStyles } from '@material-ui/core/styles';

export const styles = createStyles({
  slide: {
    '@media (max-width:600px)': {
      width: '100%',
      justifyContent: 'flex-start',
    },
    '@media (min-width:600px)': {
      width: '30%',
      justifyContent: 'flex-start',
    },
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '32px',
    marginBottom: 'auto',
  },
  slideTitle: {
    marginTop: '32px',
  },
  slideBody: {
    marginTop: '40px',
  },
  imgContainer: {
    width: '100%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
