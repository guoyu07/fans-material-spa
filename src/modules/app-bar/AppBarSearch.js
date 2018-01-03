// @flow

import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { fade } from 'material-ui/styles/colorManipulator';

// Material UI
import IconButton from 'material-ui/IconButton';

// Icons.
import SearchIcon from 'material-ui-icons/Search';

const styles = withStyles((theme) => ({
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: 16,
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25),
    },
    '& $input': {
      transition: theme.transitions.create('width'),
      width: 200,
      '&:focus': {
        width: 250,
      },
    },
  },
  search: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 9,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
}));

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
