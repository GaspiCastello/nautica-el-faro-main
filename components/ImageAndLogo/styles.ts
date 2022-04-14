import { createStyles } from '@material-ui/core/styles';

export const styles = createStyles({
  imgTitleContainer: {
    width: '100%',
    height: '30%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '8px',
  },
  logoTitleContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
});
