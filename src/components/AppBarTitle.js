import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AppBarTitle.style';

// Material UI
import Typography from 'material-ui/Typography';

class AppBarTitle extends Component {

  /**
   * The component prop types.
   *
   * @type {Object}
   */
  static propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  /**
   * The component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {
    const { title, classes } = this.props;

    return (
      <Typography type="title" color="inherit" className={classes.root}>
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
  componentWillReceiveProps ({ title }) {
    document.title = title;
  }
}

export default styles(AppBarTitle);
