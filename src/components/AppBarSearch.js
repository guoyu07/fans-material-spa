// @flow

import * as React from 'react';
import styles from './AppBarSearch.style';

// Material UI
import IconButton from 'material-ui/IconButton';

// Icons.
import SearchIcon from 'material-ui-icons/Search';

type Props = {
  width: string,
  classes: Object,
};

class AppBarSearch extends React.Component <Props> {
  /**
   * The component render.
   *
   * @return {React.Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render (): React.Node {

    const { width } = this.props;

    if (width === 'xs') {
      return this.renderSearchButton();
    }

    return this.renderFull();
  }

  /**
   * The component width === xs render Element|Node .
   *
   * @return {React.Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  renderSearchButton (): React.Node {
    return (
      <IconButton color="contrast" aria-label="搜索">
        <SearchIcon />
      </IconButton>
    );
  }

  /**
   * Render the component full search input.
   *
   * @return {React.Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  renderFull (): React.Node {

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
