import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AppBarSearch.style';

// Material UI
import IconButton from 'material-ui/IconButton';

// Icons.
import SearchIcon from 'material-ui-icons/Search';

class AppBarSearch extends Component {

  /**
   * The component prop types.
   *
   * @type {Object}
   */
  static propTypes = {
    width: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  /**
   * The component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {

    const { width } = this.props;

    if (width === 'xs') {
      return this.renderSearchButton();
    }

    return this.renderFull();
  }

  /**
   * The component width === xs render Element|Node .
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  renderSearchButton () {
    return (
      <IconButton color="contrast" aria-label="搜索">
        <SearchIcon />
      </IconButton>
    );
  }

  /**
   * Render the component full search input.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  renderFull () {

    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.search} color="contrast">
          <SearchIcon />
        </div>
        <input aria-label="搜索" className={classes.input} />
      </div>
    );
  }
}

export default styles(AppBarSearch);
