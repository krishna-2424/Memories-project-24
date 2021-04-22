import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 5,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius:'1rem',
    height: '100%',
    position: 'relative',
  },
  overlay: {
   
    top: '20px',
    left: '20px',
   // bottom:'10rem',
    color: 'white',
    position: 'absolute',
  },
  overlay2: {
    position: 'absolute',
    // float:'right',
    top: '10px',
    right: '20px',
    // bottom:'13.1rem',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});