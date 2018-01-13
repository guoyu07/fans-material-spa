// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import FormControl from 'material-ui/Form/FormControl';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import List, { ListItem, ListItemIcon } from 'material-ui/List';

// Icons
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import PersonIcon from 'material-ui-icons/Person';
import VpnKeyIcon from 'material-ui-icons/VpnKey';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import CheckIcon from 'material-ui-icons/Check';

// Components
import browserTitle from '../utils/browserTitle';
import AppBarProvider from '../modules/app-bar/AppBarProvider';
import { handleBack } from '../utils/history';

const styles = withStyles((theme: Object) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    paddingTop: 56,
  },
  back: {
    marginRight: theme.spacing.unit * 2
  },
  title: {
    flex: 1,
  },
  loginButtonIcon: {
    marginRight: theme.spacing.unit,
  },
  tipsBox: {
    padding: theme.spacing.unit * 2,
  },
  createAccessLink: {
    float: 'right',
  }
}));

type Props = {
  width: string,
  classes: Object,
};

type State = {
  showPassword: boolean,
  login: string,
  password: string,
};

class Login extends React.Component<Props, State> {

  state = {
    showPassword: false,
    login: '',
    password: '',
  }

  render(): React.Node {

    const { width } = this.props;

    if (width === 'xs') {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton onClick={handleBack} classes={{ root: classes.back }} color="contrast" aria-label="返回上一级">
                <ArrowBackIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.title}>
                登录账号
              </Typography>
              <Button color="contrast" aria-label="登录账号">
                <CheckIcon className={classes.loginButtonIcon} />登录
              </Button>
            </Toolbar>
          </AppBar>
          { this.renderMain() }
          <div className={classes.tipsBox}>
            <Button component={Link} to="/password-reset">忘记密码？</Button>
            <Button className={classes.createAccessLink} component={Link} to="/join">创建一个账号</Button>
          </div>
        </div>
      );
    }

    return (
      <AppBarProvider width={width} title="登录">
        { this.renderMain() }
      </AppBarProvider>
    );
  }

  renderMain(): React.Node {
    const { showPassword, login, password } = this.state;

    return (
      <List>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <FormControl fullWidth margin="none">
            <InputLabel htmlFor="login">用户</InputLabel>
            <Input
              placeholder="请输入登录名/E-Mail/手机号码"
              type="text"
              value={login}
              autoFocus={true}
              onChange={this.handleChange('login')}
            />
          </FormControl>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <FormControl fullWidth margin="none">
            <InputLabel htmlFor="password">密码</InputLabel>
            <Input
              placeholder="请输入用户密码"
              value={password}
              onChange={this.handleChange('password')}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={this.handleClickShowPasssword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </ListItem>
      </List>
    );
  }

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  componentDidMount() {
    browserTitle('登录');
  }
}

export default styles(Login);
