// @flow

import * as React from 'react';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

// Icons
import ArrowBackIcon from 'material-ui-icons/ArrowBack';

import AppBarProvider from '../modules/app-bar/AppBarProvider';
import handleGoBackPage from '../utils/handleGoBackPage';

const styles = withStyles((theme: Object) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    paddingTop: 56,
  },
  back: {
    marginRight: theme.spacing.unit * 2
  }
}));

type Props = {
  width: string,
  classes: Object,
};

class NotFound extends React.Component <Props> {
  render(): React.Node {
    const { width } = this.props;

    if (width === 'xs') {
      return this.mobileNotFoundFull();
    }

    return (
      <AppBarProvider width={width} title="404">
        The pages not found.
      </AppBarProvider>
    );
  }

  mobileNotFoundFull(): React.Node {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={handleGoBackPage} classes={{ root: classes.back }} color="contrast" aria-label="返回上一级">
              <ArrowBackIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              Not Found
            </Typography>
          </Toolbar>
        </AppBar>
        The pages not found.
      </div>
    );
  }
}

export default styles(NotFound);
