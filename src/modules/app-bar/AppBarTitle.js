// @flow
import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';

// Material UI
import Typography from 'material-ui/Typography';

const styles = withStyles((theme: Object) => ({
  root: {
    flex: 1,
  },
  app: {
    borderRightColor: 'rgba(255,255,255,0.3)',
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    paddingRight: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
}));

/**
 * The component Props types.
 *
 * @type {Object}
 */
type Props = {
  title: string,
  classes: Object,
  width: string,
};

class AppBarTitle extends React.Component <Props> {
  /**
   * The component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {
    const { title, classes, width } = this.props;

    if (width === 'xs') {
      return (
        <Typography noWrap={true} aria-label="标题" variant="title" color="inherit" className={classes.root}>
          { title === '首页' ? 'Fans': title }
        </Typography>
      );
    }

    return (
      <Typography noWrap={true} aria-label="标题" variant="title" color="inherit" className={classes.root}>
        <span className={classes.app}>Fans</span>{ title }
      </Typography>
    );
  }
}

export default styles(AppBarTitle);
