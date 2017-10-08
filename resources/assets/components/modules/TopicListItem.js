import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import VisibilityIcon from 'material-ui-icons/Visibility';
import CommentIcon from 'material-ui-icons/Comment';

import style from './TopicListItem.style';

class TopicListItem extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {

    const { classes } = this.props;

    return (
      <Card className={classes.card} elevation={1}>

        <CardHeader
          avatar={
            <Avatar aria-label="Seven">S</Avatar>
          }
          title={
            <Typography component="span">
              Seven &raquo; <Typography className={classes.forum} component="a">demo</Typography>
            </Typography>
          }
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography component="div">
            第十第一个话题
          </Typography>
        </CardContent>

        <CardActions disableActionSpacing>

          <Button className={classes.button} disableRipple disableFocusRipple>
            <VisibilityIcon />&nbsp;200
          </Button>

          <Button className={classes.button} disableRipple disableFocusRipple>
            <CommentIcon />&nbsp;20
          </Button>

        </CardActions>

      </Card>
    );
  }

}

export default style(TopicListItem);
