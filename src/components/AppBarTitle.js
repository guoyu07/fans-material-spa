// @flow
import * as React from 'react';
import styles from './AppBarTitle.style';

// Material UI
import Typography from 'material-ui/Typography';

/**
 * The component Props types.
 *
 * @type {Object}
 */
type Props = {
  title: string,
  classes: Object,
};

class AppBarTitle extends React.Component <Props> {
  /**
   * The component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {
    const { title, classes } = this.props;

    return (
      <Typography aria-label="标题" type="title" color="inherit" className={classes.root}>
        { title }
      </Typography>
    );
  }

  /**
   * Component will receive props.
   *
   * @param {String} options.title
   * @return {void}
   * @author Seven Du <shiweidu@outlook.com>
   */
  componentWillReceiveProps ({ title }: Props) {
    document.title = title;
  }
}

export default styles(AppBarTitle);
