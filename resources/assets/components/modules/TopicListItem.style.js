import withStyles from 'material-ui/styles/withStyles';
import blue from 'material-ui/colors/blue';

export default withStyles(theme => ({
  card: {
    width: '100%',
    marginBottom: theme.spacing.unit * 2,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  forum: {
    display: 'inline',
    color: blue[500],
    cursor: 'pointer',
  }
}));
