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
    topic: PropTypes.object.isRequired,
  }

  render() {

    const { classes, topic } = this.props;
    const { user, forum } = topic;
    const username = user.name ? `${name}(#${user.id})` : user.login;

    console.log(topic);

    return (
      <Card className={classes.card} elevation={1}>

        <CardHeader
          avatar={user.avatar
            ? <Avatar aria-label={username} src={user.avatar} />
            : <Avatar aria-label={username}>{ username[0] }</Avatar>
          }
          title={
            <Typography component="span">
              { username } &raquo; <Typography className={classes.forum} component="a">{ forum.name }</Typography>
            </Typography>
          }
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography component="div">
            { topic.subject }
          </Typography>
        </CardContent>

        <CardActions disableActionSpacing>

          <Button className={classes.button} disableRipple disableFocusRipple>
            <VisibilityIcon />&nbsp;{ topic.view_count }
          </Button>

          <Button className={classes.button} disableRipple disableFocusRipple>
            <CommentIcon />&nbsp;{ topic.post_count }
          </Button>

        </CardActions>

      </Card>
    );
  }

}

export default style(TopicListItem);
